import type { DetailedRoute, AccommodationOption } from './types';

// FIX: Accommodation data has been moved to destinations.ts to consolidate trip planning data.
// The detailed day-by-day itineraries remain here.

export const detailedRoutes: Record<number, DetailedRoute> = {
    23: {
        id: 23,
        title: 'Verão em Angra dos Reis',
        itinerary: [
            {
                city: 'Angra dos Reis',
                duration: "4 Dias",
                days: [
                    { day: 1, title: "Chegada e Praia de Garatucaia", activities: ["Check-in na acomodação.", "Tarde na Praia de Garatucaia para relaxar.", "Jantar em um restaurante local."]},
                    { day: 2, title: "Passeio de Barco para Ilha Grande", activities: ["Passeio de barco de dia inteiro para a Ilha Grande.", "Visitar a Lagoa Azul para mergulho e a Praia de Lopes Mendes."]},
                    { day: 3, title: "Centro Histórico e Ilhas Botinas", activities: ["Explorar o centro histórico de Angra dos Reis.", "Passeio de barco mais curto para as Ilhas Botinas, conhecidas como 'ilhas gêmeas'."]},
                    { day: 4, title: "Manhã Livre e Despedida", activities: ["Aproveitar a manhã na piscina da pousada ou em uma praia próxima.", "Check-out e retorno."]},
                ]
            }
        ],
    },
    24: {
        id: 24,
        title: 'Charme Histórico de Paraty',
        itinerary: [
            {
                city: 'Paraty',
                duration: "4 Dias",
                days: [
                    { day: 1, title: "Chegada e Passeio no Centro Histórico", activities: ["Check-in na pousada.", "Caminhada pelas ruas de pedra do Centro Histórico, admirando as casinhas coloniais.", "Jantar em um dos restaurantes charmosos da cidade."]},
                    { day: 2, title: "Passeio de Escuna pelas Ilhas", activities: ["Passeio de barco de dia inteiro.", "Paradas em ilhas e praias para mergulho, como Ilha Comprida e Praia da Lula."]},
                    { day: 3, title: "Vila de Trindade e Cachoeiras", activities: ["Passeio até a vila de Trindade.", "Conhecer a Praia do Cepilho, Praia de Fora e a piscina natural do Caixa d'Aço."]},
                    { day: 4, title: "Cultura Local e Despedida", activities: ["Visita a um alambique de cachaça artesanal.", "Manhã livre para últimas compras de artesanato.", "Check-out e retorno."]},
                ]
            }
        ],
    },
    25: {
        id: 25,
        title: 'Natureza e Arte em Cunha',
        itinerary: [
            {
                city: 'Cunha',
                duration: "4 Dias",
                days: [
                    { day: 1, title: "Chegada e Imersão na Cerâmica", activities: ["Check-in na pousada e almoço.", "Tarde visitando os ateliês de cerâmica no centro e na estrada para Paraty.", "Jantar com culinária local, como pratos com pinhão."]},
                    { day: 2, title: "Campos de Lavanda e Cachoeiras", activities: ["Manhã no Lavandário, apreciando a vista e os produtos de lavanda.", "Tarde na Cachoeira do Pimenta ou do Desterro para um banho refrescante."]},
                    { day: 3, title: "Parque Estadual da Serra do Mar", activities: ["Trilha no núcleo Cunha do Parque Estadual, explorando a Mata Atlântica.", "Piquenique no parque e observação de aves."]},
                    { day: 4, title: "Contemplário e Despedida", activities: ["Visita ao Contemplário para mais uma vista incrível dos campos de lavanda.", "Manhã livre para compras de queijos e doces locais.", "Check-out e retorno."]},
                ]
            }
        ],
    },
    26: {
        id: 26,
        title: 'Costa Verde: Ilha Grande, Paraty & Cunha',
        itinerary: [
             {
                city: 'Ilha Grande',
                duration: "2 Dias",
                days: [
                    { day: 1, title: "Chegada ao Paraíso", activities: ["Saída de Maricá, estacionar em Mangaratiba e pegar a barca das 8h.", "Chegada em Abraão, check-in na pousada.", "Tarde na Praia de Lopes Mendes (acesso por trilha + barco)."]},
                    { day: 2, title: "Mergulho e Próximo Destino", activities: ["Passeio de barco para a Lagoa Azul para mergulho.", "Almoço em Abraão e retorno para Mangaratiba para pegar o carro e seguir para Paraty."]},
                ]
            },
            {
                city: 'Paraty',
                duration: "2 Dias",
                days: [
                    { day: 3, title: "Chegada e Charme Colonial", activities: ["Chegada em Paraty no fim da tarde, check-in na pousada.", "Passeio noturno pelo Centro Histórico e jantar em um restaurante local."]},
                    { day: 4, title: "Serra, Lavanda e Despedida", activities: ["Passeio de um dia para Cunha, visitando o Lavandário para fotos incríveis.", "Almoço com culinária da serra em Cunha.", "Retorno para Paraty no fim da tarde e início da viagem de volta para casa."]},
                ]
            }
        ],
    }
  };