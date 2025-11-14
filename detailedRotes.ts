import type { DetailedRoute, AccommodationOption } from './types';

// FIX: Accommodation data has been moved to destinations.ts to consolidate trip planning data.
// The detailed day-by-day itineraries remain here.

export const detailedRoutes: Record<number, DetailedRoute> = {
    18: {
        id: 18,
        title: 'Natal em Porto Seguro',
        itinerary: [
            {
                city: 'Porto Seguro',
                duration: "6 Dias",
                days: [
                    { day: 1, title: "Chegada, Praia e Agito", activities: ["Chegada de madrugada, check-in e descanso.", "Manhã na Praia de Taperapuã, uma das mais famosas.", "Almoço e tarde nas barracas Axé Moi ou Tôa Tôa, com muita música e animação."]},
                    { day: 2, title: "Charme de Trancoso", activities: ["Passeio de dia inteiro para Trancoso.", "Explorar o Quadrado, a igreja de São João Batista e as praias dos Coqueiros e Nativos."]},
                    { day: 3, title: "Paraíso em Arraial d'Ajuda", activities: ["Passeio de dia inteiro para Arraial d'Ajuda.", "Caminhar pela charmosa Rua do Mucugê, relaxar na Praia do Mucugê ou Pitinga.", "Visitar o Eco Parque Arraial d'Ajuda (opcional)."]},
                    { day: 4, title: "História e Cultura", activities: ["Visita à Coroa Vermelha, local da primeira missa no Brasil.", "Conhecer o artesanato da reserva indígena Pataxó.", "À noite, curtir a Passarela do Descobrimento."]},
                    { day: 5, title: "Centro Histórico e Vistas", activities: ["Subir à Cidade Histórica para visitar o Marco do Descobrimento, o Farol e as igrejas.", "Aproveitar a vista panorâmica da orla.", "Última noite na Passarela do Descobrimento para comprar lembrancinhas."]},
                    { day: 6, title: "Manhã Livre e Voo de Volta", activities: ["Manhã livre para um último mergulho ou compras.", "Check-out do hotel e deslocamento para o aeroporto para o voo da tarde."]}
                ]
            }
        ],
    },
    19: {
        id: 19,
        title: 'Natal em Porto Seguro (4 Dias)',
        itinerary: [
            {
                city: 'Porto Seguro',
                duration: "4 Dias",
                days: [
                    { day: 1, title: "Chegada, Praia e Agito", activities: ["Chegada de madrugada, check-in e descanso.", "Manhã na Praia de Taperapuã, uma das mais famosas.", "Almoço e tarde nas barracas Axé Moi ou Tôa Tôa, com muita música e animação."]},
                    { day: 2, title: "Charme de Trancoso", activities: ["Passeio de dia inteiro para Trancoso.", "Explorar o Quadrado, a igreja de São João Batista e as praias dos Coqueiros e Nativos."]},
                    { day: 3, title: "Paraíso em Arraial d'Ajuda", activities: ["Passeio de dia inteiro para Arraial d'Ajuda.", "Caminhar pela charmosa Rua do Mucugê, relaxar na Praia do Mucugê ou Pitinga.", "Visitar o Eco Parque Arraial d'Ajuda (opcional)."]},
                    { day: 4, title: "História e Voo de Volta", activities: ["Visita à Coroa Vermelha, local da primeira missa no Brasil.", "Conhecer o artesanato da reserva indígena Pataxó.", "À tarde, voo de volta para casa."]},
                ]
            }
        ],
    },
    20: {
        id: 20,
        title: 'Natal em Porto Seguro (5 Dias)',
        itinerary: [
            {
                city: 'Porto Seguro',
                duration: "5 Dias",
                days: [
                    { day: 1, title: "Chegada, Praia e Agito", activities: ["Chegada de madrugada, check-in e descanso.", "Manhã na Praia de Taperapuã, uma das mais famosas.", "Almoço e tarde nas barracas Axé Moi ou Tôa Tôa, com muita música e animação."]},
                    { day: 2, title: "Charme de Trancoso", activities: ["Passeio de dia inteiro para Trancoso.", "Explorar o Quadrado, a igreja de São João Batista e as praias dos Coqueiros e Nativos."]},
                    { day: 3, title: "Paraíso em Arraial d'Ajuda", activities: ["Passeio de dia inteiro para Arraial d'Ajuda.", "Caminhar pela charmosa Rua do Mucugê, relaxar na Praia do Mucugê ou Pitinga.", "Visitar o Eco Parque Arraial d'Ajuda (opcional)."]},
                    { day: 4, title: "História e Cultura", activities: ["Visita à Coroa Vermelha, local da primeira missa no Brasil.", "Conhecer o artesanato da reserva indígena Pataxó.", "À noite, curtir a Passarela do Descobrimento."]},
                    { day: 5, title: "Centro Histórico e Voo de Volta", activities: ["Subir à Cidade Histórica para visitar o Marco do Descobrimento e o Farol.", "Aproveitar a vista panorâmica e voo de volta à tarde."]},
                ]
            }
        ],
    },
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