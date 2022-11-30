import { Equipo } from "../models/equipo";
import { TipoSeleccion } from "../models/tipoSeleccion.enum";

export let datos: Equipo[] = [
  {
    id: 1,
    tipo : TipoSeleccion.fm,
    competicion : [
      {
        nombre: "Copa América",
        logros: [
          {
            categoria: "mayores",
            anio: 1975,
            puesto: "subcampeón",
            sede: "Sin sede"
          },
          {
            categoria: "mayores",
            anio: 2001,
            puesto: "campeón",
            sede: "Colombia"
          },
          {
            categoria: "sub 23",
            anio: 1994,
            puesto: "Campeón",
            sede: "Colombia"
          }
        ]
      },
      {
        nombre: "Copa de Oro",
        logros: [
          {
            categoria: "mayores",
            anio: 2000,
            puesto: "subcampeón",
            sede: "Estados Unidos"
          }
        ]
      },
      {
        nombre: "Copa Mundial de la FIFA",
        logros: [
          {
            categoria: "mayores",
            anio: 2014,
            puesto: "Cuartos de Final",
            sede: "Brasil"
          },
          {
            categoria: "sub 17",
            anio: 2003,
            puesto: "Cuarto Lugar",
            sede: "Finlandia"
          },
          {
            categoria: "sub 17",
            anio: 2009,
            puesto: "Cuarto Lugar",
            sede: "Nigeria"
          },
          {
            categoria: "sub 20",
            anio: 1985,
            puesto: "Cuartos de Final",
            sede: "Unión Soviética"
          },
          {
            categoria: "sub 20",
            anio: 1989,
            puesto: "Cuartos de Final",
            sede: "Arabua Saudita"
          },
          {
            categoria: "sub 20",
            anio: 2003,
            puesto: "Tercer Lugar",
            sede: "Emiratos Árabes Unidos"
          },
          {
            categoria: "sub 20",
            anio: 2011,
            puesto: "Cuartos de Final",
            sede: "Colombia"
          }
        ]
      },
      {
        nombre: "Copa FIFA Confederaciones",
        logros: [
          {
            categoria: "mayores",
            anio: 2003,
            puesto: "Cuarto Lugar",
            sede: "Francia"
          }
        ]
      },
      {
        nombre: "Campeonato Sudamericano",
        logros: [
          {
            categoria: "sub 15",
            anio: 2004,
            puesto: "Subcampeón",
            sede: "Paraguay"
          },
          {
            categoria: "sub 15",
            anio: 2011,
            puesto: "Subcampeón",
            sede: "Uruguay"
          },
          {
            categoria: "sub 15",
            anio: 2013,
            puesto: "Subcampeón",
            sede: "Bolivia"
          },
          {
            categoria: "sub 17",
            anio: 1993,
            puesto: "Subcampeón",
            sede: "Colombia"
          },
          {
            categoria: "sub 17",
            anio: 2007,
            puesto: "Subcampeón",
            sede: "Ecuador"
          },
          {
            categoria: "sub 20",
            anio: 1987,
            puesto: "Campeón",
            sede: "Colombia"
          },
          {
            categoria: "sub 20",
            anio: 1988,
            puesto: "Subcampeón",
            sede: "Argentina"
          },
          {
            categoria: "sub 20",
            anio: 2005,
            puesto: "Campeón",
            sede: "Colombia"
          },
          {
            categoria: "sub 20",
            anio: 2015,
            puesto: "Subcampeón",
            sede: "Uruguay"
          },
          {
            categoria: "sub 20",
            anio: 2013,
            puesto: "Campeón",
            sede: "Argentina"
          },
        ]
      },
      {
        nombre: "Juegos Bolivarianos",
        logros: [
          {
            categoria: "sub 17",
            anio: 1997,
            puesto: "Campeón",
            sede: "Perú"
          },
          {
            categoria: "sub 17",
            anio: 2001,
            puesto: "Subcampeón",
            sede: "Ecuador"
          },
          {
            categoria: "sub 17",
            anio: 2005,
            puesto: "campeón",
            sede: "Colombia"
          },
          {
            categoria: "sub 17",
            anio: 2013,
            puesto: "campeón",
            sede: "Perú"
          },
          {
            categoria: "sub 17",
            anio: 2017,
            puesto: "campeón",
            sede: "Colombia"
          }
        ]
      },
      {
        nombre: "Juegos Centroamericanos y del Caribe",
        logros: [
          {
            categoria: "sub 21",
            anio: 2006,
            puesto: "Campeón",
            sede: "Colombia"
          },
          {
            categoria: "sub 21",
            anio: 2018,
            puesto: "Campeón",
            sede: "Colombia"
          }
        ]
      },
      {
        nombre: "Juegos Olímpicos",
        logros: [
          {
            categoria: "sub 23",
            anio: 2016,
            puesto: "Cuartos de Final",
            sede: "Brasil"
          },
          {
            categoria: "sub 21",
            anio: 2018,
            puesto: "Campeón",
            sede: "Colombia"
          }
        ]
      }
    ]
  },

  {
    id: 2,
    tipo : TipoSeleccion.ff,
    competicion : [
      {
        nombre: "Copa América",
        logros: [
          {
            categoria: "mayores",
            anio: 2003,
            puesto: "tercer puesto",
            sede: "Perú"
          },
          {
            categoria: "mayores",
            anio: 2010,
            puesto: "subcampeón",
            sede: "Ecuador"
          },
          {
            categoria: "mayores",
            anio: 2014,
            puesto: "subcampeón",
            sede: "Ecuador"
          },
          {
            categoria: "mayores",
            anio: 2022,
            puesto: "subcampeón",
            sede: "Colombia"
          }
        ]
      },
      {
        nombre: "Juegos Bolivarianos",
        logros: [
          {
            categoria: "mayores",
            anio: 2005,
            puesto: "subcampeón",
            sede: "Colombia"
          },
          {
            categoria: "mayores",
            anio: 2005,
            puesto: "campeón",
            sede: "Bolivia"
          },
          {
            categoria: "sub 20",
            anio: 2013,
            puesto: "campeón",
            sede: "Perú"
          },
          {
            categoria: "sub 20",
            anio: 2017,
            puesto: "campeón",
            sede: "Colombia"
          },
          {
            categoria: "sub 20",
            anio: 2022,
            puesto: "campeón",
            sede: "Colombia"
          }
        ]
      },
      {
        nombre: "Juegos Panamericanos",
        logros: [
          {
            categoria: "mayores",
            anio: 2015,
            puesto: "subcampeón",
            sede: "Canadá"
          },
          {
            categoria: "mayores",
            anio: 2019,
            puesto: "campeón",
            sede: "Perú"
          }
        ]
      },
      {
        nombre: "Juegos Centroamericanos y del Caribe",
        logros: [
          {
            categoria: "mayores",
            anio: 2014,
            puesto: "subcampeón",
            sede: "Méxio"
          }
        ]
      },
      {
        nombre: "Copa Mundial de la FIFA",
        logros: [
          {
            categoria: "sub 17",
            anio: 2022,
            puesto: "Subcampeón",
            sede: "India"
          },
          {
            categoria: "sub 20",
            anio: 2010,
            puesto: "cuarto puesto",
            sede: "Alemania"
          },
          {
            categoria: "sub 20",
            anio: 2022,
            puesto: "Cuartos de Final",
            sede: "Costa Rica"
          }
        ]
      },
      {
        nombre: "Sudamericano",
        logros: [
          {
            categoria: "sub 17",
            anio: 2008,
            puesto: "Campeón",
            sede: "Chile"
          },
          {
            categoria: "sub 17",
            anio: 2013,
            puesto: "Subcampeón",
            sede: "Paraguay"
          },
          {
            categoria: "sub 17",
            anio: 2018,
            puesto: "Subcampeón",
            sede: "Argentina"
          },
          {
            categoria: "sub 17",
            anio: 2022,
            puesto: "Subcampeón",
            sede: "Uruguay"
          },
          {
            categoria: "sub 20",
            anio: 2022,
            puesto: "Subcampeón",
            sede: "Chile"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    tipo: TipoSeleccion.fsm,
    competicion : [
      {
        nombre: "Copa Mundial de Fútsal de la FIFA",
        logros: [
          {
            categoria: "mayores",
            anio: 2012,
            puesto: "Cuarto puesto",
            sede: "Tailandia"
          }
        ]
      },
      {
        nombre: "Copa Mundial de Fútsal de la AMF",
        logros: [
          {
            categoria: "mayores",
            anio: 1994,
            puesto: "Subcampeón",
            sede: "Argentina"
          },
          {
            categoria: "mayores",
            anio: 1982,
            puesto: "Cuarto Lugar",
            sede: "Brasil"
          },
          {
            categoria: "mayores",
            anio: 2000,
            puesto: "Campeón",
            sede: "Bolivia"
          },
          {
            categoria: "mayores",
            anio: 2003,
            puesto: "subcampeón",
            sede: "Paraguay"
          },
          {
            categoria: "mayores",
            anio: 2007,
            puesto: "Tercer Lugar",
            sede: "Paraguay"
          },
          {
            categoria: "mayores",
            anio: 2011,
            puesto: "Campeón",
            sede: "Colombia"
          },
          {
            categoria: "mayores",
            anio: 2015,
            puesto: "Campeón",
            sede: "Bielorrusia"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    tipo: TipoSeleccion.fsf,
    competicion : [
      {
        nombre: "Copa Mundial de Fútsal de la AMF",
        logros: [
          {
            categoria: "",
            anio: 2008,
            puesto: "Tercer Lugar",
            sede: "Cataluña"
          },
          {
            categoria: "",
            anio: 2013,
            puesto: "Campeón",
            sede: "Colombia"
          },
          {
            categoria: "",
            anio: 2017,
            puesto: "Tercer Lugar",
            sede: "Cataluña"
          },
          {
            categoria: "",
            anio: 2022,
            puesto: "Campeón",
            sede: "Colombia"
          }
        ]
      }
    ]
  }
];
