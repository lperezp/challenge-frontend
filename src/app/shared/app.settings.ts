export class AppSettings {
  public static MENU = [
    {
      label: 'Registro de Clientes',
      routerlink: '/client/register-client',
    },
    {
      label: 'Listado de Clientes',
      routerlink: '/client/list-client',
    },
  ];

  public static TEXT_MESSAGE = {
    MESSAGE_SUCCESS: 'Se registró correctamente.',
    MESSAGE_ERROR: 'Ocurrió un error. Inténtelo más tarde.',
  };
}
