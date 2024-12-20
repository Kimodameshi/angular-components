export interface ReplaceData {
    replace: string;
    replaceWith: string;
    comment?: string;
}

export const iconClassReplacements: ReplaceData[] = [
    { replace: 'kbq-icon="pt-icons-', replaceWith: 'kbq-icon="kbq-' },
    { replace: 'pt-icons-', replaceWith: 'kbq-' },
    { replace: 'class="pt-icons"', replaceWith: '' },
    { replace: 'class="pt-icons ', replaceWith: 'class="' },
    { replace: ' pt-icons"', replaceWith: '"' },
    { replace: "'pt-icons ", replaceWith: "'" },
    { replace: '\\.pt-icons', replaceWith: '.kbq' }
];

export const iconsMapping: ReplaceData[] = [
    {
        replace: 'add-to-list_16',
        replaceWith: 'file-plus-o_16'
    },
    {
        replace: 'alert-disabled_16',
        replaceWith: 'speaker_16'
    },
    {
        replace: 'alert-enabled_16',
        replaceWith: 'speaker-wave_16'
    },
    {
        replace: 'angle-down-L_16',
        replaceWith: 'chevron-down_16'
    },
    {
        replace: 'angle-down-L_24',
        replaceWith: 'chevron-down_24'
    },
    {
        replace: 'angle-down-M_16',
        replaceWith: 'chevron-down_16'
    },
    {
        replace: 'angle-down-M_24',
        replaceWith: 'chevron-down_24'
    },
    {
        replace: 'angle-down-M_32',
        replaceWith: 'chevron-down_32'
    },
    {
        replace: 'angle-down-S_16',
        replaceWith: 'chevron-down-s_16'
    },
    {
        replace: 'angle-left-L_16',
        replaceWith: 'chevron-left_16'
    },
    {
        replace: 'angle-left-L_24',
        replaceWith: 'chevron-left_24'
    },
    {
        replace: 'angle-left-M_16',
        replaceWith: 'chevron-left_16'
    },
    {
        replace: 'angle-left-M_24',
        replaceWith: 'chevron-left_24'
    },
    {
        replace: 'angle-left-M_32',
        replaceWith: 'chevron-left_32'
    },
    {
        replace: 'angle-left-S_16',
        replaceWith: 'chevron-left-s_16'
    },
    {
        replace: 'angle-right-L_16',
        replaceWith: 'chevron-right_16'
    },
    {
        replace: 'angle-right-L_24',
        replaceWith: 'chevron-right_24'
    },
    {
        replace: 'angle-right-M_16',
        replaceWith: 'chevron-right_16'
    },
    {
        replace: 'angle-right-M_24',
        replaceWith: 'chevron-right_24'
    },
    {
        replace: 'angle-right-M_32',
        replaceWith: 'chevron-right_32'
    },
    {
        replace: 'angle-right-S_16',
        replaceWith: 'chevron-right-s_16'
    },
    {
        replace: 'angle-up-L_16',
        replaceWith: 'chevron-up_16'
    },
    {
        replace: 'angle-up-L_24',
        replaceWith: 'chevron-up_24'
    },
    {
        replace: 'angle-up-M_16',
        replaceWith: 'chevron-up_16'
    },
    {
        replace: 'angle-up-M_24',
        replaceWith: 'chevron-up_24'
    },
    {
        replace: 'angle-up-M_32',
        replaceWith: 'chevron-up_32'
    },
    {
        replace: 'angle-up-S_16',
        replaceWith: 'chevron-up-s_16'
    },
    {
        replace: 'archive_16',
        replaceWith: 'box-archive_16'
    },
    {
        replace: 'arrow-back_16',
        replaceWith: 'arrow-left_16'
    },
    {
        replace: 'arrow-forward_16',
        replaceWith: 'arrow-right_16'
    },
    {
        replace: 'arrow-left-terminal_16',
        replaceWith: 'arrow-left-to-line_16'
    },
    {
        replace: 'arrow-right-terminal_16',
        replaceWith: 'arrow-right-to-line_16'
    },
    {
        replace: 'arrow-small-down_16',
        replaceWith: 'arrow-down_16'
    },
    {
        replace: 'arrow-small-left_16',
        replaceWith: 'arrow-left_16'
    },
    {
        replace: 'arrow-small-right_16',
        replaceWith: 'arrow-right_16'
    },
    {
        replace: 'arrow-small-up_16',
        replaceWith: 'arrow-up_16'
    },
    {
        replace: 'asset-access-point_16',
        replaceWith: 'signal-stream_16'
    },
    {
        replace: 'asset-access-point_24',
        replaceWith: 'signal-stream_24'
    },
    {
        replace: 'asset-account_16',
        replaceWith: 'user_16'
    },
    {
        replace: 'asset-account_24',
        replaceWith: 'user_24'
    },
    {
        replace: 'asset-active-directory_16',
        replaceWith: 'active-directory_16'
    },
    {
        replace: 'asset-active-directory_24',
        replaceWith: 'active-directory_24'
    },
    {
        replace: 'asset-aix_16',
        replaceWith: 'aix_16'
    },
    {
        replace: 'asset-aix_24',
        replaceWith: 'aix_24'
    },
    {
        replace: 'asset-android_16',
        replaceWith: 'android_16'
    },
    {
        replace: 'asset-apple_16',
        replaceWith: 'apple_16'
    },
    {
        replace: 'asset-apple_24',
        replaceWith: 'apple_24'
    },
    {
        replace: 'asset-bsd_16',
        replaceWith: 'bsd_16'
    },
    {
        replace: 'asset-bsd_24',
        replaceWith: 'bsd_24'
    },
    {
        replace: 'asset-cloud_16',
        replaceWith: 'cloud_16'
    },
    {
        replace: 'asset-cloud_24',
        replaceWith: 'cloud_24'
    },
    {
        replace: 'asset-desktop_16',
        replaceWith: 'desktop_16'
    },
    {
        replace: 'asset-desktop_24',
        replaceWith: 'desktop_24'
    },
    {
        replace: 'asset-firewall_16',
        replaceWith: 'block-brick_16'
    },
    {
        replace: 'asset-firewall_24',
        replaceWith: 'block-brick_24'
    },
    {
        replace: 'asset-host-virtual_16',
        replaceWith: 'question-circle_16'
    },
    {
        replace: 'asset-host-virtual_24',
        replaceWith: 'question-circle_24'
    },
    {
        replace: 'asset-hpux_16',
        replaceWith: 'hpux_16'
    },
    {
        replace: 'asset-hpux_24',
        replaceWith: 'hpux_24'
    },
    {
        replace: 'asset-hypervisor_16',
        replaceWith: 'hypervisor_16'
    },
    {
        replace: 'asset-hypervisor_24',
        replaceWith: 'hypervisor_24'
    },
    {
        replace: 'asset-idrac_16',
        replaceWith: 'idrac_16'
    },
    {
        replace: 'asset-idrac_24',
        replaceWith: 'idrac_24'
    },
    {
        replace: 'asset-linux_16',
        replaceWith: 'linux_16'
    },
    {
        replace: 'asset-linux_24',
        replaceWith: 'linux_24'
    },
    {
        replace: 'asset-mobile-device_16',
        replaceWith: 'mobile_16'
    },
    {
        replace: 'asset-multiple_16',
        replaceWith: 'desktop-multiple_16'
    },
    {
        replace: 'asset-multiple_24',
        replaceWith: 'desktop-multiple_24'
    },
    {
        replace: 'asset-network_16',
        replaceWith: 'cloud_16'
    },
    {
        replace: 'asset-network_24',
        replaceWith: 'cloud-o_24'
    },
    {
        replace: 'asset-network-device_16',
        replaceWith: 'network-device-dots_16'
    },
    {
        replace: 'asset-network-device_24',
        replaceWith: 'network-device-dots_24'
    },
    {
        replace: 'asset-network-dummy_16',
        replaceWith: 'question-circle_16'
    },
    {
        replace: 'asset-node_16',
        replaceWith: 'question-circle_16'
    },
    {
        replace: 'asset-node_24',
        replaceWith: 'question-circle_24'
    },
    {
        replace: 'asset-other_16',
        replaceWith: 'question-circle_16'
    },
    {
        replace: 'asset-other_24',
        replaceWith: 'question-circle_24'
    },
    {
        replace: 'asset-other-2_24',
        replaceWith: 'question-circle_24'
    },
    {
        replace: 'asset-printer_16',
        replaceWith: 'printer_16'
    },
    {
        replace: 'asset-printer_24',
        replaceWith: 'printer_24'
    },
    {
        replace: 'asset-router_16',
        replaceWith: 'router_16'
    },
    {
        replace: 'asset-router_24',
        replaceWith: 'router_24'
    },
    {
        replace: 'asset-sap_16',
        replaceWith: 'sap_16'
    },
    {
        replace: 'asset-sap_24',
        replaceWith: 'sap_24'
    },
    {
        replace: 'asset-server_16',
        replaceWith: 'server_16'
    },
    {
        replace: 'asset-server_24',
        replaceWith: 'server_24'
    },
    {
        replace: 'asset-switch_16',
        replaceWith: 'arrows-left-right-rectangle-horizontal-o_16'
    },
    {
        replace: 'asset-switch_24',
        replaceWith: 'arrows-left-right-rectangle-horizontal-o_24'
    },
    {
        replace: 'asset-website_16',
        replaceWith: 'globe_16'
    },
    {
        replace: 'asset-website_24',
        replaceWith: 'globe_24'
    },
    {
        replace: 'asset-windows_16',
        replaceWith: 'windows_16'
    },
    {
        replace: 'asset-windows_24',
        replaceWith: 'windows_24'
    },
    {
        replace: 'bell-o_16',
        replaceWith: 'bell_16'
    },
    {
        replace: 'bell-o_24',
        replaceWith: 'bell_24'
    },
    {
        replace: 'bell-off-o_16',
        replaceWith: 'bell-slash_16'
    },
    {
        replace: 'bell-off-o_24',
        replaceWith: 'bell-slash_24'
    },
    {
        replace: 'bento_16',
        replaceWith: 'bento-menu_16'
    },
    {
        replace: 'bento_24',
        replaceWith: 'bento-menu_24'
    },
    {
        replace: 'bento_32',
        replaceWith: 'bento-menu_32'
    },
    {
        replace: 'blackbox_24',
        replaceWith: 'server_24'
    },
    {
        replace: 'blackbox-o_24',
        replaceWith: 'server_24'
    },
    {
        replace: 'blacklist_16',
        replaceWith: 'file-badge-ban-o_16'
    },
    {
        replace: 'blacklist_24',
        replaceWith: 'file-badge-ban-o_24'
    },
    {
        replace: 'bolt_32',
        replaceWith: 'bolt-o_32'
    },
    {
        replace: 'book_24',
        replaceWith: 'book-multiple_24'
    },
    {
        replace: 'book-o_24',
        replaceWith: 'book-multiple-o_24'
    },
    {
        replace: 'border-network_16',
        replaceWith: 'cloud-badge-globe-o_16'
    },
    {
        replace: 'border-network_24',
        replaceWith: 'cloud-badge-globe-o_24'
    },
    {
        replace: 'box-closed_16',
        replaceWith: 'box_16'
    },
    {
        replace: 'branch-o_24',
        replaceWith: 'branch_24'
    },
    {
        replace: 'build-config_16',
        replaceWith: 'wrench-badge-play_16'
    },
    {
        replace: 'calendar_16',
        replaceWith: 'calendar-o_16'
    },
    {
        replace: 'calendar-stopped_16',
        replaceWith: 'calendar-xmark-o_16'
    },
    {
        replace: 'chart-bar_16',
        replaceWith: 'chart-bar-horizontal_16'
    },
    {
        replace: 'chart-bar_24',
        replaceWith: 'chart-bar-horizontal_24'
    },
    {
        replace: 'chart-bar_32',
        replaceWith: 'chart-bar-horizontal_32'
    },
    {
        replace: 'chart-bar_48',
        replaceWith: 'chart-bar-horizontal_48'
    },
    {
        replace: 'chart-index_24',
        replaceWith: 'chart-index-line_24'
    },
    {
        replace: 'chart-index-only_24',
        replaceWith: 'chart-index_24'
    },
    {
        replace: 'chart-map_16',
        replaceWith: 'map_16'
    },
    {
        replace: 'chart-map_24',
        replaceWith: 'map_24'
    },
    {
        replace: 'chart-stacked-bar_24',
        replaceWith: 'chart-stacked-bar-horizontal_24'
    },
    {
        replace: 'check-auto_16',
        replaceWith: 'check-badge-auto_16'
    },
    {
        replace: 'child-link_16',
        replaceWith: 'arrow-turn-down-right_16'
    },
    {
        replace: 'circle-6_16',
        replaceWith: 'circle-xs_16'
    },
    {
        replace: 'circle-8_16',
        replaceWith: 'circle-xs_16'
    },
    {
        replace: 'circle-empty_16',
        replaceWith: 'circle-o_16'
    },
    {
        replace: 'circle-empty_24',
        replaceWith: 'circle-o_24'
    },
    {
        replace: 'circle-empty-partial_16',
        replaceWith: 'circle-dot-o_16'
    },
    {
        replace: 'circle-outline_16',
        replaceWith: 'circle-o_16'
    },
    {
        replace: 'circle-partial_16',
        replaceWith: 'circle-dot_16'
    },
    {
        replace: 'circle-successfull_16',
        replaceWith: 'check-circle_16'
    },
    {
        replace: 'circle-successfull_24',
        replaceWith: 'check-circle_24'
    },
    {
        replace: 'circle-successfull-o_16',
        replaceWith: 'check-circle_16'
    },
    {
        replace: 'circle-unavailable_16',
        replaceWith: 'ban_16'
    },
    {
        replace: 'circle-unavailable_24',
        replaceWith: 'ban_24'
    },
    {
        replace: 'circle-unavailable-partial_16',
        replaceWith: 'ban-dot_16'
    },
    {
        replace: 'circle-warning_24',
        replaceWith: 'exclamation-circle_24'
    },
    {
        replace: 'close-circle_16',
        replaceWith: 'xmark-circle_16'
    },
    {
        replace: 'close-circle-o_16',
        replaceWith: 'xmark-circle_16'
    },
    {
        replace: 'close-circle-o_24',
        replaceWith: 'xmark-circle_24'
    },
    {
        replace: 'close-circle-small_16',
        replaceWith: 'xmark-circle_16'
    },
    {
        replace: 'close-L_16',
        replaceWith: 'xmark_16'
    },
    {
        replace: 'close-L_32',
        replaceWith: 'xmark_32'
    },
    {
        replace: 'close-M_16',
        replaceWith: 'xmark-s_16'
    },
    {
        replace: 'close-S_16',
        replaceWith: 'xmark-s_16'
    },
    {
        replace: 'collapse_16',
        replaceWith: 'chevrons-down-up_16'
    },
    {
        replace: 'collapse-diagonal_16',
        replaceWith: 'arrows-collapse-diagonal_16'
    },
    {
        replace: 'collect-data_16',
        replaceWith: 'satellite-dish_16'
    },
    {
        replace: 'color-palette_16',
        replaceWith: 'palette_16'
    },
    {
        replace: 'comment_16',
        replaceWith: 'message_16'
    },
    {
        replace: 'comment_24',
        replaceWith: 'message_24'
    },
    {
        replace: 'comment-active_24',
        replaceWith: 'message-dot_24'
    },
    {
        replace: 'compliance_16',
        replaceWith: 'certificate-vertical_16'
    },
    {
        replace: 'compliance-level-critical_16',
        replaceWith: 'gear-badge-arrowtriangle-up-square_16'
    },
    {
        replace: 'compliance-level-high_16',
        replaceWith: 'gear-badge-square_16'
    },
    {
        replace: 'compliance-level-low_16',
        replaceWith: 'gear-badge-square-o_16'
    },
    {
        replace: 'compliance-level-medium_16',
        replaceWith: 'gear-badge-square-s_16'
    },
    {
        replace: 'compliance-level-not-defined_16',
        replaceWith: 'gear-badge-square-o_16'
    },
    {
        replace: 'connection_24',
        replaceWith: 'network-device-dots_24'
    },
    {
        replace: 'connection-o_24',
        replaceWith: 'network-device-dots_24'
    },
    {
        replace: 'copy_16',
        replaceWith: 'square-multiple-o_16'
    },
    {
        replace: 'copy-o_16',
        replaceWith: 'file-multiple-o_16'
    },
    {
        replace: 'criticality-medium_16',
        replaceWith: 'circle-half_16'
    },
    {
        replace: 'dashboard_32',
        replaceWith: 'dashboard-o_32'
    },
    {
        replace: 'delete_16',
        replaceWith: 'trash_16'
    },
    {
        replace: 'delivered_16',
        replaceWith: 'check-double_16'
    },
    {
        replace: 'disc_16',
        replaceWith: 'disk-drive_16'
    },
    {
        replace: 'disc_24',
        replaceWith: 'disk-drive_24'
    },
    {
        replace: 'double-angle-down_16',
        replaceWith: 'chevron-double-down_16'
    },
    {
        replace: 'double-angle-left_16',
        replaceWith: 'chevron-double-left_16'
    },
    {
        replace: 'double-angle-right_16',
        replaceWith: 'chevron-double-right_16'
    },
    {
        replace: 'double-angle-up_16',
        replaceWith: 'chevron-double-up_16'
    },
    {
        replace: 'download_16',
        replaceWith: 'arrow-down-to-line_16'
    },
    {
        replace: 'download_32',
        replaceWith: 'cloud-arrow-down-o_32'
    },
    {
        replace: 'edit_16',
        replaceWith: 'pencil_16'
    },
    {
        replace: 'edit_24',
        replaceWith: 'pencil_24'
    },
    {
        replace: 'ellipsis_16',
        replaceWith: 'ellipsis-vertical_16'
    },
    {
        replace: 'ellipsis_24',
        replaceWith: 'ellipsis-vertical_24'
    },
    {
        replace: 'ellipsis-horiz-circle_16',
        replaceWith: 'ellipsis-horizontal-circle-o_16'
    },
    {
        replace: 'email-notification_24',
        replaceWith: 'envelope-dot_24'
    },
    {
        replace: 'email-notification-o_24',
        replaceWith: 'envelope-dot_24'
    },
    {
        replace: 'enter_16',
        replaceWith: 'arrow-turn-down-left_16'
    },
    {
        replace: 'envelope-partial_16',
        replaceWith: 'envelope-dot_16'
    },
    {
        replace: 'envelope-send_16',
        replaceWith: 'envelope-badge-arrow-right_16'
    },
    {
        replace: 'error_16',
        replaceWith: 'exclamation-triangle_16'
    },
    {
        replace: 'error_32',
        replaceWith: 'exclamation-triangle_32'
    },
    {
        replace: 'event-alert_16',
        replaceWith: 'bolt-rectangle-vertical_16'
    },
    {
        replace: 'event-alert-o_16',
        replaceWith: 'bolt-rectangle-vertical-o_16'
    },
    {
        replace: 'event-hierarchical_16',
        replaceWith: 'database-badge-arrow-down_16'
    },
    {
        replace: 'event-normalized_16',
        replaceWith: 'file-lines_16'
    },
    {
        replace: 'event-normalized-o_16',
        replaceWith: 'file-lines_16'
    },
    {
        replace: 'event-raw-o_16',
        replaceWith: 'file-lines-short_16'
    },
    {
        replace: 'event-template_16',
        replaceWith: 'bars-bold-horizontal_16'
    },
    {
        replace: 'exchange_16',
        replaceWith: 'arrow-right-arrow-left_16'
    },
    {
        replace: 'expand_16',
        replaceWith: 'chevrons-up-down_16'
    },
    {
        replace: 'expand-diagonal_16',
        replaceWith: 'arrows-expand-diagonal_16'
    },
    {
        replace: 'export_16',
        replaceWith: 'arrow-right-from-bracket_16'
    },
    {
        replace: 'external-link_16',
        replaceWith: 'arrow-up-right-from-square_16'
    },
    {
        replace: 'eye-crossed_16',
        replaceWith: 'eye-slash_16'
    },
    {
        replace: 'file-archive_16',
        replaceWith: 'file-archive-o_16'
    },
    {
        replace: 'file-code_16',
        replaceWith: 'file-code-o_16'
    },
    {
        replace: 'file-doc_48',
        replaceWith: 'file-doc-o_48'
    },
    {
        replace: 'file-empty_16',
        replaceWith: 'file-o_16'
    },
    {
        replace: 'file-empty_32',
        replaceWith: 'file-o_32'
    },
    {
        replace: 'file-empty-multiple_16',
        replaceWith: 'file-multiple-o_16'
    },
    {
        replace: 'file-empty-multiple_24',
        replaceWith: 'file-multiple-o_24'
    },
    {
        replace: 'file-passed_16',
        replaceWith: 'arrow-right-through-line_16'
    },
    {
        replace: 'file-passed-partial_16',
        replaceWith: 'arrow-right-circle-dot-o_16'
    },
    {
        replace: 'file-pdf_48',
        replaceWith: 'file-pdf-o_48'
    },
    {
        replace: 'file-text_16',
        replaceWith: 'file-text-o_16'
    },
    {
        replace: 'file-text-arrow-left_16',
        replaceWith: 'file-badge-arrow-left-o_16'
    },
    {
        replace: 'file-text-arrow-right_16',
        replaceWith: 'file-badge-arrow-right-o_16'
    },
    {
        replace: 'file-unfinished_16',
        replaceWith: 'file-cut-o_16'
    },
    {
        replace: 'filter-active_16',
        replaceWith: 'filter-dot_16'
    },
    {
        replace: 'filter-active-o_16',
        replaceWith: 'filter-dot_16'
    },
    {
        replace: 'filter-o_16',
        replaceWith: 'filter_16'
    },
    {
        replace: 'find-me_16',
        replaceWith: 'crosshairs_16'
    },
    {
        replace: 'flowchart-partial_16',
        replaceWith: 'flowchart-dot_16'
    },
    {
        replace: 'folder_32',
        replaceWith: 'folder-o_32'
    },
    {
        replace: 'folder-closed_16',
        replaceWith: 'folder_16'
    },
    {
        replace: 'folder-closed_24',
        replaceWith: 'folder_24'
    },
    {
        replace: 'folder-closed-partial_16',
        replaceWith: 'folder-dot_16'
    },
    {
        replace: 'folder-move_16',
        replaceWith: 'folder-badge-arrow-right_16'
    },
    {
        replace: 'folder-open-o_24',
        replaceWith: 'folder-open_24'
    },
    {
        replace: 'folder-open-partial_16',
        replaceWith: 'folder-open-dot_16'
    },
    {
        replace: 'folder-opened_16',
        replaceWith: 'folder_open_16'
    },
    {
        replace: 'folder-search_16',
        replaceWith: 'folder-badge-magnifying-glass_16'
    },
    {
        replace: 'folder-search-open_16',
        replaceWith: 'folder-open-badge-magnifying-glass_16'
    },
    {
        replace: 'folder-search-opened_16',
        replaceWith: 'folder-open-badge-magnifying-glass_16'
    },
    {
        replace: 'forward_16',
        replaceWith: 'forward-step_16'
    },
    {
        replace: 'gear-o_24',
        replaceWith: 'gear_24'
    },
    {
        replace: 'globe-partial_16',
        replaceWith: 'globe-dot_16'
    },
    {
        replace: 'go-to-comment_16',
        replaceWith: 'message-arrow-right_16'
    },
    {
        replace: 'go-to-comment_24',
        replaceWith: 'message-arrow-right_24'
    },
    {
        replace: 'grid-group-active_16',
        replaceWith: 'grid-group-dot_16'
    },
    {
        replace: 'hamburger_16',
        replaceWith: 'bars-horizontal_16'
    },
    {
        replace: 'hamburger_32',
        replaceWith: 'bars-horizontal_32'
    },
    {
        replace: 'handle_16',
        replaceWith: 'grip-vertical_16'
    },
    {
        replace: 'hash_16',
        replaceWith: 'hashtag_16'
    },
    {
        replace: 'history_16',
        replaceWith: 'clock-rotate-left_16'
    },
    {
        replace: 'hourglasses-0_16',
        replaceWith: 'hourglass-start_16'
    },
    {
        replace: 'hourglasses-100_16',
        replaceWith: 'hourglass-end_16'
    },
    {
        replace: 'hourglasses-50_16',
        replaceWith: 'hourglass-half_16'
    },
    {
        replace: 'ignore_24',
        replaceWith: 'minus-circle_24'
    },
    {
        replace: 'ignore-o_16',
        replaceWith: 'minus-circle-o_16'
    },
    {
        replace: 'ignore-o_24',
        replaceWith: 'minus-circle-o_24'
    },
    {
        replace: 'image-block_16',
        replaceWith: 'image_16'
    },
    {
        replace: 'import_16',
        replaceWith: 'arrow-right-to-bracket_16'
    },
    {
        replace: 'importance-1_16',
        replaceWith: 'arrows-up_16'
    },
    {
        replace: 'importance-2_16',
        replaceWith: 'arrow-up_16'
    },
    {
        replace: 'importance-3_16',
        replaceWith: 'circle-half_16'
    },
    {
        replace: 'importance-4_16',
        replaceWith: 'minus_16'
    },
    {
        replace: 'importance-5_16',
        replaceWith: 'arrow-down_16'
    },
    {
        replace: 'info_16',
        replaceWith: 'info-circle_16'
    },
    {
        replace: 'info_24',
        replaceWith: 'info-circle_24'
    },
    {
        replace: 'info-o_16',
        replaceWith: 'info-circle_16'
    },
    {
        replace: 'info-o_24',
        replaceWith: 'info-circle_24'
    },
    {
        replace: 'interface-in_16',
        replaceWith: 'arrow-right-to-arc_16'
    },
    {
        replace: 'interface-in_24',
        replaceWith: 'arrow-right-to-arc_24'
    },
    {
        replace: 'interface-out_16',
        replaceWith: 'arrow-right-from-arc_16'
    },
    {
        replace: 'interface-out_24',
        replaceWith: 'arrow-right-from-arc_24'
    },
    {
        replace: 'ip-group_16',
        replaceWith: 'ip-multiple_16'
    },
    {
        replace: 'landscape-orientation_16',
        replaceWith: 'file-horizontal-o_16'
    },
    {
        replace: 'license_16',
        replaceWith: 'certificate-horizontal_16'
    },
    {
        replace: 'license_24',
        replaceWith: 'certificate-horizontal_24'
    },
    {
        replace: 'limit_16',
        replaceWith: 'scissors_16'
    },
    {
        replace: 'link-group_16',
        replaceWith: 'link-multiple_16'
    },
    {
        replace: 'link-group_24',
        replaceWith: 'link-multiple_24'
    },
    {
        replace: 'link-partial_16',
        replaceWith: 'link-dot_16'
    },
    {
        replace: 'loader-circle_16',
        replaceWith: 'spinner_16'
    },
    {
        replace: 'lock-locked_16',
        replaceWith: 'lock_16'
    },
    {
        replace: 'lock-locked_24',
        replaceWith: 'lock_24'
    },
    {
        replace: 'lock-locked-o_16',
        replaceWith: 'lock_16'
    },
    {
        replace: 'lock-locked-o_24',
        replaceWith: 'lock_24'
    },
    {
        replace: 'lock-unlocked_16',
        replaceWith: 'lock-open_16'
    },
    {
        replace: 'log_24',
        replaceWith: 'scroll-o_24'
    },
    {
        replace: 'log-o_16',
        replaceWith: 'scroll-o_16'
    },
    {
        replace: 'log-o_24',
        replaceWith: 'scroll-o_24'
    },
    {
        replace: 'login_24',
        replaceWith: 'arrow-right-to-rectangle_24'
    },
    {
        replace: 'maximize_16',
        replaceWith: 'chevrons-expand_16'
    },
    {
        replace: 'minimize_16',
        replaceWith: 'compress_16'
    },
    {
        replace: 'minus-circle-small_16',
        replaceWith: 'minus-circle-s_16'
    },
    {
        replace: 'minus-circle-xs_16',
        replaceWith: 'minus-circle-s_16'
    },
    {
        replace: 'net-packet_16',
        replaceWith: 'network-device_16'
    },
    {
        replace: 'net-packet-group_16',
        replaceWith: 'network-device-multiple_16'
    },
    {
        replace: 'new-tab_16',
        replaceWith: 'arrow-up-right-from-square_16'
    },
    {
        replace: 'parent-link_16',
        replaceWith: 'arrow-up-left_16'
    },
    {
        replace: 'pause-on-time_16',
        replaceWith: 'clock-badge-pause_16'
    },
    {
        replace: 'play-o_16',
        replaceWith: 'play_16'
    },
    {
        replace: 'play-on-time_16',
        replaceWith: 'clock-badge-play_16'
    },
    {
        replace: 'plug-o_16',
        replaceWith: 'plug_16'
    },
    {
        replace: 'plug-o_24',
        replaceWith: 'plug_24'
    },
    {
        replace: 'plus-circle-xs_16',
        replaceWith: 'plus-circle-s_16'
    },
    {
        replace: 'policies_16',
        replaceWith: 'robot_16'
    },
    {
        replace: 'policy_24',
        replaceWith: 'clipboard-check_24'
    },
    {
        replace: 'policy-o_24',
        replaceWith: 'clipboard-check-o_24'
    },
    {
        replace: 'portrait-orientation_16',
        replaceWith: 'file-o_16'
    },
    {
        replace: 'project_16',
        replaceWith: 'bars-vertical_16'
    },
    {
        replace: 'protection-active_16',
        replaceWith: 'shield-check_16'
    },
    {
        replace: 'protection-half_16',
        replaceWith: 'shield-half_16'
    },
    {
        replace: 'protection-off_16',
        replaceWith: 'shield-slash_16'
    },
    {
        replace: 'question-circle-o_16',
        replaceWith: 'question-circle_16'
    },
    {
        replace: 'question-circle-o_24',
        replaceWith: 'question-circle_24'
    },
    {
        replace: 'refresh_16',
        replaceWith: 'arrows-rotate-reverse_16'
    },
    {
        replace: 'refresh_24',
        replaceWith: 'arrows-rotate-reverse_24'
    },
    {
        replace: 'refresh_48',
        replaceWith: 'arrows-rotate_48'
    },
    {
        replace: 'refresh-off_16',
        replaceWith: 'arrows-rotate-reverse-slash_16'
    },
    {
        replace: 'registry-group_16',
        replaceWith: 'registry-multiple_16'
    },
    {
        replace: 'remove-from-list_16',
        replaceWith: 'list-badge-xmark_16'
    },
    {
        replace: 'report_16',
        replaceWith: 'file-o_16'
    },
    {
        replace: 'report_24',
        replaceWith: 'file-o_24'
    },
    {
        replace: 'report_32',
        replaceWith: 'file-lines-o_32'
    },
    {
        replace: 'report-errors_16',
        replaceWith: 'file-exclamation-o_16'
    },
    {
        replace: 'report-o_16',
        replaceWith: 'file-o_16'
    },
    {
        replace: 'report-o_24',
        replaceWith: 'file-o_24'
    },
    {
        replace: 'retro-analysis_16',
        replaceWith: 'arrow-rotate-right-dot_16'
    },
    {
        replace: 'satellite_16',
        replaceWith: 'satellite-dish_16'
    },
    {
        replace: 'save_16',
        replaceWith: 'floppy-disk_16'
    },
    {
        replace: 'scan_32',
        replaceWith: 'radar-o_32'
    },
    {
        replace: 'search_16',
        replaceWith: 'magnifying-glass_16'
    },
    {
        replace: 'search_24',
        replaceWith: 'magnifying-glass_24'
    },
    {
        replace: 'search-sparkles_16',
        replaceWith: 'magnifying-glass-badge-sparkles_16'
    },
    {
        replace: 'share_16',
        replaceWith: 'arrow-up-from-rectangle_16'
    },
    {
        replace: 'siem-vulner-level-critical_16',
        replaceWith: 'rectangle-triangle-vertical-thin_16'
    },
    {
        replace: 'siem-vulner-level-high_16',
        replaceWith: 'rectangle-vertical-thin_16'
    },
    {
        replace: 'siem-vulner-level-low_16',
        replaceWith: 'rectangle-vertical-thin-o_16'
    },
    {
        replace: 'siem-vulner-level-medium_16',
        replaceWith: 'rectangle-vertical-thin-half_16'
    },
    {
        replace: 'siem-vulner-level-not-defined_16',
        replaceWith: 'rectangle-vertical-thin-lines_16'
    },
    {
        replace: 'significance-high_16',
        replaceWith: 'shield-star_16'
    },
    {
        replace: 'significance-low_16',
        replaceWith: 'shield-o_16'
    },
    {
        replace: 'significance-medium_16',
        replaceWith: 'shield-ribbon_16'
    },
    {
        replace: 'significance-na_16',
        replaceWith: 'shield-o_16'
    },
    {
        replace: 'sliders-active_16',
        replaceWith: 'sliders-dot_16'
    },
    {
        replace: 'sort_16',
        replaceWith: 'arrow-up-arrow-down_16'
    },
    {
        replace: 'sort-active_16',
        replaceWith: 'arrow-up-arrow-down-dot_16'
    },
    {
        replace: 'square-partial_16',
        replaceWith: 'square-dot_16'
    },
    {
        replace: 'startline_16',
        replaceWith: 'diamond_16'
    },
    {
        replace: 'stop-on-time_16',
        replaceWith: 'clock-badge-stop_16'
    },
    {
        replace: 'storage_16',
        replaceWith: 'database_16'
    },
    {
        replace: 'storage_32',
        replaceWith: 'database-o_32'
    },
    {
        replace: 'storage-normal_16',
        replaceWith: 'database-normal_16'
    },
    {
        replace: 'storage-raw_16',
        replaceWith: 'database-raw_16'
    },
    {
        replace: 'success_16',
        replaceWith: 'check-circle_16'
    },
    {
        replace: 'success-small_16',
        replaceWith: 'check-circle_16'
    },
    {
        replace: 'summ_16',
        replaceWith: 'sigma_16'
    },
    {
        replace: 'table-download_32',
        replaceWith: 'table-badge-arrow-down-circle_32'
    },
    {
        replace: 'table-list_16',
        replaceWith: 'table_16'
    },
    {
        replace: 'table-list_24',
        replaceWith: 'table_24'
    },
    {
        replace: 'table-list-ttl_16',
        replaceWith: 'table-badge-clock_16'
    },
    {
        replace: 'table-list-ttl_24',
        replaceWith: 'table-badge-clock_24'
    },
    {
        replace: 'tags_16',
        replaceWith: 'tag-multiple_16'
    },
    {
        replace: 'tasks_16',
        replaceWith: 'bars-progress_16'
    },
    {
        replace: 'tasks_24',
        replaceWith: 'bars-progress_24'
    },
    {
        replace: 'text-block_16',
        replaceWith: 'text-font_16'
    },
    {
        replace: 'theme_16',
        replaceWith: 'sun-moon_16'
    },
    {
        replace: 'trend-down_16',
        replaceWith: 'arrow-down-right_16'
    },
    {
        replace: 'trend-up_16',
        replaceWith: 'arrow-up-right_16'
    },
    {
        replace: 'triangle-down_16',
        replaceWith: 'chevron-down-s_16'
    },
    {
        replace: 'triangle-left_16',
        replaceWith: 'chevron-left-s_16'
    },
    {
        replace: 'triangle-right_16',
        replaceWith: 'chevron-right-s_16'
    },
    {
        replace: 'triangle-up_16',
        replaceWith: 'chevron-up-s_16'
    },
    {
        replace: 'unique_16',
        replaceWith: 'arrow-down-on-rectangles_16'
    },
    {
        replace: 'unlink_16',
        replaceWith: 'link-broken_16'
    },
    {
        replace: 'unpin_16',
        replaceWith: 'pin-slash_16'
    },
    {
        replace: 'update_16',
        replaceWith: 'arrow-rotate-left_16'
    },
    {
        replace: 'update_24',
        replaceWith: 'arrow-rotate-left_24'
    },
    {
        replace: 'update-o_24',
        replaceWith: 'arrow-rotate-left_24'
    },
    {
        replace: 'upload-to-cloud_16',
        replaceWith: 'arrow-up-from-line_16'
    },
    {
        replace: 'upload-to-cloud_24',
        replaceWith: 'cloud-arrow-up-o_24'
    },
    {
        replace: 'upload-to-cloud_32',
        replaceWith: 'cloud-arrow-up-o_32'
    },
    {
        replace: 'upload-to-cloud_64',
        replaceWith: 'cloud-arrow-up-o_64'
    },
    {
        replace: 'user-o_16',
        replaceWith: 'user_16'
    },
    {
        replace: 'user-o_24',
        replaceWith: 'user_24'
    },
    {
        replace: 'users-group_16',
        replaceWith: 'user-multiple_16'
    },
    {
        replace: 'users-group_24',
        replaceWith: 'user-multiple_24'
    },
    {
        replace: 'users-group-o_24',
        replaceWith: 'user-multiple_24'
    },
    {
        replace: 'vulner-exploitable_16',
        replaceWith: 'burst_16'
    },
    {
        replace: 'vulner-level-abovemedium_16',
        replaceWith: 'eject_16'
    },
    {
        replace: 'vulner-level-belowmedium_16',
        replaceWith: 'eject-down_16'
    },
    {
        replace: 'vulner-level-high_16',
        replaceWith: 'arrow-up_16'
    },
    {
        replace: 'vulner-level-low_16',
        replaceWith: 'arrow-down_16'
    },
    {
        replace: 'vulner-level-medium_16',
        replaceWith: 'stop_16'
    },
    {
        replace: 'vulner-lpe_16',
        replaceWith: 'user-arrow-triangle-up_16'
    },
    {
        replace: 'vulner-network_16',
        replaceWith: 'chart-network_16'
    },
    {
        replace: 'vulner-patch_16',
        replaceWith: 'capsule_16'
    },
    {
        replace: 'vulner-rce_16',
        replaceWith: 'code_16'
    },
    {
        replace: 'whitelist_16',
        replaceWith: 'file-badge-arrow-through-line-o_16'
    },
    {
        replace: 'word-wrap_16',
        replaceWith: 'wrap-text_16'
    },
    {
        replace: 'word-wrap-slash_16',
        replaceWith: 'wrap-text-slash_16'
    },
    {
        replace: 'zoom-to-fit_16',
        replaceWith: 'arrows-left-right-to-line_16'
    }
];
