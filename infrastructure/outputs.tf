output "function_app_url" {
  value = azurerm_linux_function_app.user_func.default_hostname
}
