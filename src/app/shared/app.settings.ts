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

  public static HOURS = [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
  ];

  // average death value of people
  public static AGE_AVERAGE_DEATH = 80;
}
