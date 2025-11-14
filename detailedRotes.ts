import type { DetailedRoute, AccommodationOption } from './types';

// FIX: Extracted the accommodations array into a separate constant `portoSeguroAccommodations`.
// This resolves a "used before declaration" error by preventing `detailedRoutes` from being referenced within its own initialization.
const portoSeguroAccommodations: AccommodationOption[] = [
            {
                name: "Pousada Costamar",
                city: "Porto Seguro",
                rating: 6.8,
                pricePerNight: 158,
                totalPrice: 664,
                nights: 4,
                amenities: ["Piscina", "Café da manhã incluído", "Wi-Fi Grátis", "Ar-condicionado"],
                pros: ["Melhor preço encontrado", "Localização central (8 min da Passarela do Descobrimento)", "Piscina interna", "Reembolsável"],
                cons: ["Avaliação 'Boa' (6.8), a mais baixa da lista", "Estrutura mais simples (2 estrelas)"],
                distanceToCenter: "A 8 min de caminhada da Passarela do Descobrimento.",
                bookingUrl: "https://www.hoteis.com/ho1438235584/pousada-alua-porto-seguro-brasil/?chkin=2025-12-20&chkout=2025-12-24"
            },
             {
                name: "Pousada Sonho Meu",
                city: "Porto Seguro",
                rating: 9.0,
                pricePerNight: 174,
                totalPrice: 953,
                nights: 4,
                amenities: ["Estacionamento", "Restaurante", "Wi-Fi Grátis", "Jardim", "Churrasqueira"],
                pros: ["Opção mais barata disponível", "Avaliação 'Muito boa' (9.0)", "Totalmente reembolsável", "Flexibilidade de pagamento"],
                cons: ["Estrutura simples (3 estrelas)", "Pode não incluir café da manhã na tarifa mais baixa"],
                distanceToCenter: "A 13 min de caminhada da Passarela do Descobrimento.",
                bookingUrl: "https://www.hoteis.com/ho2671674400/pousada-sonho-meu-porto-seguro-brasil/?chkin=2025-12-20&chkout=2025-12-24"
            },
            {
                name: "Pousada Vila Nativa",
                city: "Porto Seguro",
                rating: 8.0,
                pricePerNight: 192,
                totalPrice: 808,
                nights: 4,
                amenities: ["Piscina", "Café da manhã incluído", "Wi-Fi Grátis", "Praia de areia branca"],
                pros: ["Opção muito econômica", "Avaliação 'Muito boa' (8.0)", "Totalmente reembolsável", "Piscina e proximidade da praia"],
                cons: ["Tarifa pode ser para quarto básico", "Estrutura mais simples (3 estrelas)"],
                distanceToCenter: "A 3 min de carro da Praia do Mucugê.",
                bookingUrl: "https://www.hoteis.com/ho3201038336/pousada-vila-nativa-porto-seguro-brasil/?chkin=2025-12-20&chkout=2025-12-24"
            },
            {
                name: "Pousada O Cantinho",
                city: "Porto Seguro",
                rating: 8.0,
                pricePerNight: 114,
                totalPrice: 456,
                nights: 4,
                amenities: ["Wi-Fi Grátis", "Jardim", "Sala de Jogos", "Arrumação diária"],
                pros: ["Excelente localização (2 min da Rua do Mucugê)", "Ótimo custo-benefício", "Flexibilidade de pagamento ('Reserve agora, pague depois')"],
                cons: ["Comodidades simples", "Pode não ter estacionamento", "Estrutura mais rústica"],
                distanceToCenter: "Localizado em Arraial d'Ajuda, a 2 min de caminhada da Rua do Mucugê.",
                bookingUrl: "https://www.hoteis.com/ho675643/pousada-o-cantinho-porto-seguro-brasil/?chkin=2025-12-20&chkout=2025-12-24&x_pwa=1&rfrr=HSR&pwa_ts=1762872834060"
            },
            {
                name: "Hotel Pousada Castanheiras do Village",
                city: "Porto Seguro",
                rating: 9.0,
                pricePerNight: 209,
                totalPrice: 879,
                nights: 4,
                amenities: ["Piscina", "Restaurante", "Estacionamento", "Wi-Fi Grátis", "Café da manhã"],
                pros: ["Avaliação 'Extraordinária' (9.0)", "Localização perto do Complexo Tôa Tôa", "Boa estrutura com piscina e restaurante"],
                cons: ["Opção de tarifa não reembolsável", "Pode ser mais focado em famílias e agito"],
                distanceToCenter: "A 4 min de carro do Complexo de Lazer Tôa Tôa.",
                bookingUrl: "https://www.hoteis.com/ho439048/hotel-pousada-castanheiras-do-village-porto-seguro-brasil/?chkin=2025-12-20&chkout=2025-12-24"
            },
            {
                name: "Ancoradouro Hotel",
                city: "Porto Seguro",
                rating: 8.2,
                pricePerNight: 213,
                totalPrice: 896,
                nights: 4,
                amenities: ["3 piscinas", "Café da manhã incluído", "Wi-Fi grátis", "Ar-condicionado", "Permite animais"],
                pros: ["Totalmente reembolsável", "Avaliação 'Boa' (8.2)", "Estrutura com 3 piscinas", "Permite animais de estimação grátis"],
                cons: ["Preço um pouco mais alto que outras pousadas", "Localização pode ser movimentada"],
                distanceToCenter: "A 18 min de caminhada da Passarela do Descobrimento.",
                bookingUrl: "https://www.hoteis.com/ho2689180800/ancoradouro-hotel-porto-seguro-brasil/?chkin=2025-12-20&chkout=2025-12-24"
            },
            {
                name: "Hospedaria Flor do Xandó",
                city: "Porto Seguro",
                rating: 0,
                pricePerNight: 215,
                totalPrice: 905,
                nights: 4,
                amenities: ["Piscina externa", "Estacionamento", "Wi-Fi Grátis", "Serviço de arrumação"],
                pros: ["Preço muito competitivo com desconto", "Totalmente reembolsável", "Ambiente charmoso com redes", "Possui piscina"],
                cons: ["Distante do centro (necessário carro)", "Sem avaliação numérica de hóspedes", "Estrutura mais rústica"],
                distanceToCenter: "Distante do centro, a 144 min de carro do aeroporto.",
                bookingUrl: "https://www.hoteis.com/ho3873466976/hospedaria-flor-do-xando/?chkin=2025-12-20&chkout=2025-12-24"
            },
             {
                name: "Pousada Gira Mundo",
                city: "Porto Seguro",
                rating: 0,
                pricePerNight: 216,
                totalPrice: 937,
                nights: 4,
                amenities: ["Wi-Fi Grátis", "Permite animais", "Serviço de arrumação", "Não fumante"],
                pros: ["Preço competitivo", "Localização central (2 min da Rua do Mucugê)", "Totalmente reembolsável", "Permite animais de estimação grátis"],
                cons: ["Estrutura simples (2 estrelas)", "Sem avaliação numérica visível", "Pode ser barulhento devido à localização"],
                distanceToCenter: "Localizado em Arraial d'Ajuda, a 2 min de caminhada da Rua do Mucugê.",
                bookingUrl: "https://www.hoteis.com/ho3346599808/pousada-gira-mundo/?chkin=2025-12-20&chkout=2025-12-24"
            },
            {
                name: "Pousada Alto da Praia",
                city: "Porto Seguro",
                rating: 8.4,
                pricePerNight: 220,
                totalPrice: 926,
                nights: 4,
                amenities: ["Piscina com bar", "Estacionamento", "Café da manhã incluído", "Wi-Fi Grátis"],
                pros: ["Avaliação 'Muito boa' (8.4)", "Totalmente reembolsável", "Piscina com bar", "Excelente localização (2 min da Rua do Mucugê)"],
                cons: ["Preço intermediário", "Pode ter bastante movimento devido à localização"],
                distanceToCenter: "Localizado em Arraial d'Ajuda, a 2 min de caminhada da Rua do Mucugê.",
                bookingUrl: "https://www.hoteis.com/ho3223397184/pousada-alto-da-praia-porto-seguro-brasil/?chkin=2025-12-20&chkout=2025-12-24"
            },
            {
                name: "Pousada Brisa do Mar",
                city: "Porto Seguro",
                rating: 8.0,
                pricePerNight: 224,
                totalPrice: 1037,
                nights: 4,
                amenities: ["Acesso à praia", "Café da manhã incluído", "Wi-Fi Grátis", "Ar-condicionado"],
                pros: ["Totalmente reembolsável", "Avaliação 'Muito boa' (8.0)", "Excelente café da manhã", "Localização central, a 2 min da Passarela do Descobrimento"],
                cons: ["Estrutura pode ser mais simples que as demais", "Taxas elevam o preço final"],
                distanceToCenter: "Localizado no centro, a 2 min de caminhada da Passarela do Descobrimento.",
                bookingUrl: "https://www.hoteis.com/ho443721/pousada-brisa-do-mar-porto-seguro-brasil/?chkin=2025-12-20&chkout=2025-12-24"
            },
            {
                name: "Pousada Arraial Lua Crescente",
                city: "Porto Seguro",
                rating: 8.8,
                pricePerNight: 228,
                totalPrice: 956,
                nights: 4,
                amenities: ["Piscina", "Café da manhã incluído", "Wi-Fi Grátis", "Ar-condicionado", "Permite animais"],
                pros: ["Avaliação 'Excelente' (8.8)", "Totalmente reembolsável", "Ótima localização (3 min da Rua do Mucugê)", "Permite animais de estimação grátis"],
                cons: ["Preço intermediário", "Disponibilidade pode ser limitada"],
                distanceToCenter: "Localizado em Arraial d'Ajuda, a 3 min de caminhada da Rua do Mucugê.",
                bookingUrl: "https://www.hoteis.com/ho2653901312/pousada-arraial-lua-crescente-porto-seguro-brasil/?chkin=2025-12-20&chkout=2025-12-24"
            },
            {
                name: "Marlim Porto Hotel",
                city: "Porto Seguro",
                rating: 7.6,
                pricePerNight: 247,
                totalPrice: 1038,
                nights: 4,
                amenities: ["Piscina", "Café da manhã incluído", "Wi-Fi Grátis", "Ar-condicionado"],
                pros: ["Localização central, perto da Passarela do Descobrimento", "Boa estrutura com piscina e terraço", "Café da manhã bem avaliado"],
                cons: ["Preço mais elevado (inclui taxas)", "Avaliação ligeiramente inferior às outras", "Pode ser mais movimentado por ser no centro"],
                distanceToCenter: "Localizado no centro, a 13 min de caminhada da Passarela do Descobrimento.",
                bookingUrl: "https://www.hoteis.com/ho599588/marlim-porto-hotel-porto-seguro-brasil/?chkin=2025-12-20&chkout=2025-12-24"
            }
        ].sort((a, b) => a.pricePerNight - b.pricePerNight);

const paratyAccommodationsFourNights: AccommodationOption[] = [
    {
        name: "Pousada Entre Folhas",
        city: "Paraty",
        rating: 9.0,
        pricePerNight: 234,
        totalPrice: 983,
        nights: 4,
        amenities: ["Estacionamento grátis", "Wi-Fi Grátis", "Jardim", "Ar-condicionado", "Serviço de traslado para a praia"],
        pros: ["Avaliação 'Maravilhosa' (9.0)", "Totalmente reembolsável", "Ambiente tranquilo e cercado de natureza", "Ótimos serviços como traslado"],
        cons: ["Fica um pouco fora do centro, ideal para quem está de carro e busca sossego."],
        distanceToCenter: "A 9 min de carro do Centro Histórico.",
        bookingUrl: "https://www.hoteis.com/ho3234158880/pousada-entre-folhas-paraty-brasil/?chkin=2025-12-20&chkout=2025-12-24"
    },
    {
        name: "Pousada Camila",
        city: "Paraty",
        rating: 8.4,
        pricePerNight: 287,
        totalPrice: 1207,
        nights: 4,
        amenities: ["Piscina externa", "Café da manhã incluído", "Wi-Fi Grátis", "Estacionamento", "Sala de jogos"],
        pros: ["Avaliação 'Muito boa' (8.4)", "Café da manhã bem avaliado", "Piscina e área de lazer"],
        cons: ["Preço um pouco mais elevado", "Pode exigir uma pequena caminhada para o centro histórico"],
        distanceToCenter: "A 19 min de caminhada da Igreja Matriz.",
        bookingUrl: "https://www.hoteis.com/ho514276/pousada-camila-paraty-brasil/?chkin=2025-12-19&chkout=2025-12-23"
    }
].sort((a, b) => a.pricePerNight - b.pricePerNight);

// FIX: Added a new accommodations list for Paraty with a 2-night duration and recalculated prices for the Costa Verde itinerary.
const paratyAccommodationsTwoNights: AccommodationOption[] = [
    {
        name: "Pousada Entre Folhas",
        city: "Paraty",
        rating: 9.0,
        pricePerNight: 234,
        totalPrice: 492, // Recalculated for 2 nights
        nights: 2,
        amenities: ["Estacionamento grátis", "Wi-Fi Grátis", "Jardim", "Ar-condicionado", "Serviço de traslado para a praia"],
        pros: ["Avaliação 'Maravilhosa' (9.0)", "Totalmente reembolsável", "Ambiente tranquilo e cercado de natureza", "Ótimos serviços como traslado"],
        cons: ["Fica um pouco fora do centro, ideal para quem está de carro e busca sossego."],
        distanceToCenter: "A 9 min de carro do Centro Histórico.",
        bookingUrl: "https://www.hoteis.com/ho3234158880/pousada-entre-folhas-paraty-brasil/?chkin=2025-12-22&chkout=2025-12-24"
    },
    {
        name: "Pousada Camila",
        city: "Paraty",
        rating: 8.4,
        pricePerNight: 287,
        totalPrice: 604, // Recalculated for 2 nights
        nights: 2,
        amenities: ["Piscina externa", "Café da manhã incluído", "Wi-Fi Grátis", "Estacionamento", "Sala de jogos"],
        pros: ["Avaliação 'Muito boa' (8.4)", "Café da manhã bem avaliado", "Piscina e área de lazer"],
        cons: ["Preço um pouco mais elevado", "Pode exigir uma pequena caminhada para o centro histórico"],
        distanceToCenter: "A 19 min de caminhada da Igreja Matriz.",
        bookingUrl: "https://www.hoteis.com/ho514276/pousada-camila-paraty-brasil/?chkin=2025-12-22&chkout=2025-12-24"
    }
].sort((a, b) => a.pricePerNight - b.pricePerNight);


const ilhaGrandeAccommodations: AccommodationOption[] = [
    {
        name: "Pousada Sakura Rio Mar",
        city: "Ilha Grande",
        rating: 9.3,
        pricePerNight: 324,
        totalPrice: 648,
        nights: 2,
        amenities: ["Wi-Fi gratuito", "Quartos para não fumantes", "Serviço de quarto", "Quartos para famílias"],
        pros: ["Avaliação 'Fantástica' (9.3)", "Localização excelente", "Alta demanda (geralmente esgotado)", "Comodidades modernas"],
        cons: ["Preço mais elevado em comparação a outras opções da região."],
        distanceToCenter: "Localização central em Abraão, próximo ao cais.",
        bookingUrl: "https://www.booking.com/hotel/br/bella-tulip.pt-br.html?aid=340301&checkin=2025-12-20&checkout=2025-12-22&group_adults=2&no_rooms=1"
    },
    {
        name: "Pousada Oásis",
        city: "Ilha Grande",
        rating: 9.3,
        pricePerNight: 350,
        totalPrice: 700,
        nights: 2,
        amenities: ["Wi-Fi gratuito", "Quartos para não fumantes", "Ar-condicionado", "Café da manhã"],
        pros: ["Avaliação 'Fantástica' (9.3)", "Café da manhã excelente", "Localização privilegiada", "Equipe atenciosa"],
        cons: ["Pode ser barulhento por estar perto do centro", "Estrutura pode ser mais simples"],
        distanceToCenter: "A 100m da Praia do Abraão.",
        bookingUrl: "https://www.booking.com/hotel/br/pousada-oasis.pt-br.html?aid=340301&checkin=2025-12-20&checkout=2025-12-22&group_adults=2&no_rooms=1"
    },
    {
        name: "Suítes Golfo",
        city: "Ilha Grande",
        rating: 8.6,
        pricePerNight: 245,
        totalPrice: 490,
        nights: 2,
        amenities: ["Beira-mar", "Wi-Fi gratuito", "Varanda", "Ar-condicionado", "Quartos para famílias"],
        pros: ["Avaliação 'Fabulosa' (8.6)", "Localização em frente à praia com vista para o mar", "Preço competitivo"],
        cons: ["Não serve café da manhã", "A tarifa mais barata não é reembolsável"],
        distanceToCenter: "Em frente à Praia do Abraão.",
        bookingUrl: "https://www.booking.com/hotel/br/suites-golfo.pt-br.html?aid=340301&checkin=2025-12-20&checkout=2025-12-22&group_adults=2&no_rooms=1"
    }
];

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
        accommodations: portoSeguroAccommodations,
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
        accommodations: portoSeguroAccommodations,
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
        accommodations: portoSeguroAccommodations,
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
        accommodations: [
             {
                name: "Pousada Sakura Rio Mar",
                city: "Ilha Grande",
                rating: 9.3,
                pricePerNight: 324,
                totalPrice: 1296,
                nights: 4,
                amenities: ["Wi-Fi gratuito", "Quartos para não fumantes", "Serviço de quarto", "Quartos para famílias"],
                pros: ["Avaliação 'Fantástica' (9.3)", "Localização excelente", "Alta demanda", "Comodidades modernas"],
                cons: ["Preço mais elevado em comparação a outras opções da região."],
                distanceToCenter: "Localização central em Abraão, próximo ao cais.",
                bookingUrl: "https://www.booking.com/hotel/br/bella-tulip.pt-br.html?aid=340301&checkin=2025-12-20&checkout=2025-12-24&group_adults=2&no_rooms=1"
            },
            {
                name: "Pousada Oásis",
                city: "Ilha Grande",
                rating: 9.3,
                pricePerNight: 350,
                totalPrice: 1400,
                nights: 4,
                amenities: ["Wi-Fi gratuito", "Quartos para não fumantes", "Ar-condicionado", "Café da manhã"],
                pros: ["Avaliação 'Fantástica' (9.3)", "Café da manhã excelente", "Localização privilegiada"],
                cons: ["Pode ser barulhento por estar perto do centro"],
                distanceToCenter: "A 100m da Praia do Abraão.",
                bookingUrl: "https://www.booking.com/hotel/br/pousada-oasis.pt-br.html?aid=340301&checkin=2025-12-20&checkout=2025-12-24&group_adults=2&no_rooms=1"
            },
            {
                name: "Suítes Golfo",
                city: "Ilha Grande",
                rating: 8.6,
                pricePerNight: 245,
                totalPrice: 980,
                nights: 4,
                amenities: ["Beira-mar", "Wi-Fi gratuito", "Varanda", "Ar-condicionado", "Quartos para famílias"],
                pros: ["Avaliação 'Fabulosa' (8.6)", "Localização em frente à praia com vista", "Preço competitivo"],
                cons: ["Não serve café da manhã", "A tarifa mais barata não é reembolsável"],
                distanceToCenter: "Em frente à Praia do Abraão.",
                bookingUrl: "https://www.booking.com/hotel/br/suites-golfo.pt-br.html?aid=340301&checkin=2025-12-20&checkout=2025-12-24&group_adults=2&no_rooms=1"
            },
            {
                name: "Flats Catamarã",
                city: "Angra dos Reis",
                rating: 10,
                pricePerNight: 226,
                totalPrice: 950,
                nights: 4,
                amenities: ["Piscina externa", "Estacionamento grátis", "Wi-Fi Grátis", "Aceita animais de estimação"],
                pros: ["Avaliação 'Extraordinária'", "Totalmente reembolsável", "Localização perto da praia", "Vista para o mar"],
                cons: ["Taxas podem ser aplicadas para pets", "Pode precisar de carro para locomoção"],
                distanceToCenter: "A 2 min de carro da Praia de Garatucaia.",
                bookingUrl: "https://www.hoteis.com/ho3860840608/flats-catamara/?chkin=2025-12-20&chkout=2025-12-24"
            }
        ].sort((a,b) => a.pricePerNight - b.pricePerNight),
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
        accommodations: paratyAccommodationsFourNights,
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
        accommodations: [
            {
                name: "Espaço Flor das Águas",
                city: "Cunha",
                rating: 8.8,
                pricePerNight: 181,
                totalPrice: 1254,
                nights: 4,
                amenities: ["Spa de serviço completo", "Restaurante", "Buffet de café da manhã", "Wi-Fi Grátis", "Estacionamento"],
                pros: ["Avaliação 'Excelente' (8.8)", "Ambiente focado em bem-estar com Spa", "Cercado por natureza", "Aceita cães e gatos"],
                cons: ["Localização um pouco afastada, ideal para quem busca sossego", "O preço do quarto econômico pode não ter as melhores vistas"],
                distanceToCenter: "Localizado nas montanhas de Cunha.",
                bookingUrl: "https://www.hoteis.com/ho3827177120/espaco-flor-das-aguas/?chkin=2025-12-20&chkout=2025-12-24"
            }
        ]
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
        accommodations: [...ilhaGrandeAccommodations, ...paratyAccommodationsTwoNights],
    }
  };