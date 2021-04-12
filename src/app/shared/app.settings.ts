export class AppSettings {
  public static MENU = [
    {
      label: 'Listado de Clientes',
      routerlink: '/client/list-client',
    },
    {
      label: 'Análisis de Clientes',
      routerlink: '/analysis',
    },
  ];

  public static TEXT_MESSAGE = {
    MESSAGE_SUCCESS: 'Se registró correctamente.',
    MESSAGE_ERROR: 'Ocurrió un error. Inténtelo más tarde.',
  };
}
