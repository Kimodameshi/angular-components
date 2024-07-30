import { FlatTreeControl } from './flat-tree-control';

describe('FlatTreeControl', () => {
    let treeControl: FlatTreeControl<TestData>;
    const getLevel = (node: TestData) => node.level;
    const isExpandable = (node: TestData) => node.children && node.children.length > 0;
    const getValue = (node: TestData) => node.name;

    beforeEach(() => {
        treeControl = new FlatTreeControl<TestData>(getLevel, isExpandable, getValue, getValue);
    });

    describe('base tree control actions', () => {
        it('should be able to expand and collapse dataNodes', () => {
            const nodes = generateData(10, 4);
            const secondNode = nodes[1];
            const sixthNode = nodes[5];
            treeControl.dataNodes = nodes;

            treeControl.expand(secondNode);

            expect(treeControl.isExpanded(secondNode)).withContext('Expect second node to be expanded').toBeTruthy();
            expect(treeControl.expansionModel.selected)
                .withContext('Expect second node in expansionModel')
                .toContain(secondNode);
            expect(treeControl.expansionModel.selected.length)
                .withContext('Expect only second node in expansionModel')
                .toBe(1);

            treeControl.toggle(sixthNode);

            expect(treeControl.isExpanded(secondNode)).withContext('Expect second node to stay expanded').toBeTruthy();
            expect(treeControl.isExpanded(sixthNode)).withContext('Expect sixth node to be expanded').toBeTruthy();
            expect(treeControl.expansionModel.selected)
                .withContext('Expect sixth node in expansionModel')
                .toContain(sixthNode);
            expect(treeControl.expansionModel.selected)
                .withContext('Expect second node in expansionModel')
                .toContain(secondNode);
            expect(treeControl.expansionModel.selected.length)
                .withContext('Expect two dataNodes in expansionModel')
                .toBe(2);

            treeControl.collapse(secondNode);

            expect(treeControl.isExpanded(secondNode)).withContext('Expect second node to be collapsed').toBeFalsy();
            expect(treeControl.expansionModel.selected.length).withContext('Expect one node in expansionModel').toBe(1);
            expect(treeControl.isExpanded(sixthNode)).withContext('Expect sixth node to stay expanded').toBeTruthy();
            expect(treeControl.expansionModel.selected)
                .withContext('Expect sixth node in expansionModel')
                .toContain(sixthNode);
        });

        it('should return correct expandable values', () => {
            const nodes = generateData(10, 4);
            treeControl.dataNodes = nodes;

            for (let i = 0; i < 10; i++) {
                expect(treeControl.isExpandable(nodes[i]))
                    .withContext(`Expect node[${i}] to be expandable`)
                    .toBeTruthy();

                for (let j = 0; j < 4; j++) {
                    expect(treeControl.isExpandable(nodes[i].children[j]))
                        .withContext(`Expect node[${i}]'s child[${j}] to be not expandable`)
                        .toBeFalsy();
                }
            }
        });

        it('should return correct levels', () => {
            const numNodes = 10;
            const numChildren = 4;
            const numGrandChildren = 2;
            const nodes = generateData(numNodes, numChildren, numGrandChildren);
            treeControl.dataNodes = nodes;

            for (let i = 0; i < numNodes; i++) {
                expect(treeControl.getLevel(nodes[i])).withContext(`Expect node[${i}]'s level to be 1`).toBe(1);

                for (let j = 0; j < numChildren; j++) {
                    expect(treeControl.getLevel(nodes[i].children[j]))
                        .withContext(`Expect node[${i}]'s child[${j}] to be not expandable`)
                        .toBe(2);

                    for (let k = 0; k < numGrandChildren; k++) {
                        expect(treeControl.getLevel(nodes[i].children[j].children[k]))
                            .withContext(`Expect node[${i}]'s child[${j}] to be not expandable`)
                            .toBe(3);
                    }
                }
            }
        });

        it('should toggle descendants correctly', () => {
            const numNodes = 10;
            const numChildren = 4;
            const numGrandChildren = 2;
            const nodes = generateData(numNodes, numChildren, numGrandChildren);

            const data = [];
            flatten(nodes, data);
            treeControl.dataNodes = data;

            treeControl.expandDescendants(nodes[1]);

            const expandedNodesNum = numChildren + 1 + numChildren * numGrandChildren;
            expect(treeControl.expansionModel.selected.length)
                .withContext(`Expect expanded ${expandedNodesNum} nodes`)
                .toBe(expandedNodesNum);

            expect(treeControl.isExpanded(nodes[1])).withContext('Expect second node to be expanded').toBeTruthy();

            for (let i = 0; i < numChildren; i++) {
                expect(treeControl.isExpanded(nodes[1].children[i]))
                    .withContext(`Expect second node's children to be expanded`)
                    .toBeTruthy();

                for (let j = 0; j < numGrandChildren; j++) {
                    expect(treeControl.isExpanded(nodes[1].children[i].children[j]))
                        .withContext(`Expect second node grand children to be not expanded`)
                        .toBeTruthy();
                }
            }
        });

        it('should be able to expand/collapse all the dataNodes', () => {
            const numNodes = 10;
            const numChildren = 4;
            const numGrandChildren = 2;
            const nodes = generateData(numNodes, numChildren, numGrandChildren);
            const data = [];
            flatten(nodes, data);
            treeControl.dataNodes = data;

            treeControl.expandDescendants(nodes[1]);

            treeControl.collapseAll();

            expect(treeControl.expansionModel.selected.length).withContext(`Expect no expanded nodes`).toBe(0);

            treeControl.expandAll();

            const totalNumber = numNodes + numNodes * numChildren + numNodes * numChildren * numGrandChildren;
            expect(treeControl.expansionModel.selected.length)
                .withContext(`Expect ${totalNumber} expanded nodes`)
                .toBe(totalNumber);
        });
    });
});

export class TestData {
    a: string;
    b: string;
    c: string;
    level: number;
    name: string;
    children: TestData[];

    constructor(a: string, b: string, c: string, level: number = 1, children: TestData[] = []) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.level = level;
        this.children = children;
    }
}

function generateData(dataLength: number, childLength: number, grandChildLength: number = 0): TestData[] {
    const data = <any>[];
    let nextIndex = 0;

    for (let i = 0; i < dataLength; i++) {
        const children = <any>[];
        for (let j = 0; j < childLength; j++) {
            const grandChildren = <any>[];
            for (let k = 0; k < grandChildLength; k++) {
                grandChildren.push(new TestData(`a_${nextIndex}`, `b_${nextIndex}`, `c_${nextIndex++}`, 3));
            }
            children.push(new TestData(`a_${nextIndex}`, `b_${nextIndex}`, `c_${nextIndex++}`, 2, grandChildren));
        }
        data.push(new TestData(`a_${nextIndex}`, `b_${nextIndex}`, `c_${nextIndex++}`, 1, children));
    }

    return data;
}

function flatten(nodes: TestData[], data: TestData[]) {
    for (const node of nodes) {
        data.push(node);

        if (node.children && node.children.length > 0) {
            flatten(node.children, data);
        }
    }
}
