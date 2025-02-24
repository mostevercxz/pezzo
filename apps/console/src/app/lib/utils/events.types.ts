// Pattern snake_case, Context => Object => Action

export enum AnalyticsEvent {
  user_login,
  user_logout,
  user_signup,
  prompt_modal_opened,
  prompt_created,
  prompt_nav_clicked,
  prompt_run_test_clicked,
  prompt_how_to_consume_modal_opened,
  prompt_how_to_consume_tab_changed,
  prompt_publish_modal_opened,
  prompt_commit_modal_opened,
  prompt_functions_modal_opened,
  prompt_provider_selector_opened,
  prompt_publish_clicked,
  prompt_environment_selected,
  prompt_version_selected,
  prompt_functions_edited,
  prompt_delete_confirmed,
  prompt_delete_cancelled,
  prompt_form_submitted,
  prompt_form_cancelled,
  prompt_commit_submitted,
  prompt_commit_cancelled,
  prompt_versions_viewed,
  prompt_settings_viewed,
  prompt_metrics_viewed,
  prompt_metric_view_changed,
  prompt_test_submitted,
  prompt_test_cancelled,
  prompt_test_display_mode_changed,
  prompt_chat_completion_message_created,
  prompt_chat_completion_message_deleted,
  prompt_chat_completion_message_role_changed,
  provider_api_keys_modal_opened,
  provider_api_key_set,
  provider_api_key_deleted,
  provider_api_keys_modal_canceled,
  request_details_viewed,
  request_details_pagination_change,
  request_details_filter_added,
  request_details_filter_removed,
  environment_create_modal_opened,
  environment_delete_modal_opened,
  environment_form_submitted,
  environment_form_cancelled,
  environment_delete_confirmed,
  environment_delete_cancelled,
  project_create_modal_opened,
  project_form_submitted,
  project_form_cancelled,
  project_nav_clicked,
  project_id_copied,
  project_dashboard_timeframe_changed,
  project_dashboard_custom_date_popover_opened,
  project_dashboard_custom_date_applied,
  project_delete_modal_opened,
  project_delete_confirmed,
  project_delete_cancelled,
  project_rename_modal_opened,
  project_rename_submitted,
  project_rename_cancelled,
  organization_tab_changed,
  organization_member_invite_modal_opened,
  organization_api_key_copied,
  organization_settings_form_submitted,
}
