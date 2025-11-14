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
                images: [
                    "https://images.trvl-media.com/lodging/45000000/44920000/44913700/44913612/820573e0.jpg",
                    "https://images.trvl-media.com/lodging/45000000/44920000/44913700/44913612/03d6f14b.jpg",
                    "https://images.trvl-media.com/lodging/45000000/44920000/44913700/44913612/81e5b565.jpg",
                    "https://images.trvl-media.com/lodging/45000000/44920000/44913700/44913612/8c92a6c8.jpg",
                    "https://images.trvl-media.com/lodging/45000000/44920000/44913700/44913612/d4483863.jpg"
                ],
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
                images: [
                    "https://images.trvl-media.com/lodging/84000000/83460000/83458600/83458575/e6f1a07c.jpg",
                    "https://images.trvl-media.com/lodging/84000000/83460000/83458600/83458575/3d102e3b.jpg",
                    "https://images.trvl-media.com/lodging/84000000/83460000/83458600/83458575/62a7d432.jpg",
                    "https://images.trvl-media.com/lodging/84000000/83460000/83458600/83458575/6d0012cb.jpg",
                    "https://images.trvl-media.com/lodging/84000000/83460000/83458600/83458575/96d078ba.jpg"
                ],
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
                images: [
                    "https://images.trvl-media.com/lodging/101000000/100010000/100001200/100001198/087948a3.jpg",
                    "https://images.trvl-media.com/lodging/101000000/100010000/100001200/100001198/e1ac912a.jpg",
                    "https://images.trvl-media.com/lodging/101000000/100010000/100001200/100001198/0b2b8e39.jpg",
                    "https://images.trvl-media.com/lodging/101000000/100010000/100001200/100001198/79a83d78.jpg",
                    "https://images.trvl-media.com/lodging/101000000/100010000/100001200/100001198/9560f855.jpg"
                ],
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
                images: [
                    "https://images.trvl-media.com/lodging/18000000/17760000/17750100/17750044/e9e80a9f.jpg?impolicy=resizecrop&rw=1200&ra=fit",
                    "https://images.trvl-media.com/lodging/18000000/17760000/17750100/17750044/c2303b71.jpg?impolicy=resizecrop&rw=1200&ra=fit",
                    "https://images.trvl-media.com/lodging/18000000/17760000/17750100/17750044/a5a75308.jpg?impolicy=resizecrop&rw=1200&ra=fit",
                    "https://images.trvl-media.com/lodging/18000000/17760000/17750100/17750044/d095a519.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                ],
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
                images: [
                    "https://images.trvl-media.com/lodging/7000000/6470000/6469000/6468921/b6ab50c0.jpg",
                    "https://images.trvl-media.com/lodging/7000000/6470000/6469000/6468921/2e5e408d.jpg",
                    "https://images.trvl-media.com/lodging/7000000/6470000/6469000/6468921/5120516c.jpg",
                    "https://images.trvl-media.com/lodging/7000000/6470000/6469000/6468921/d1e2e1a3.jpg",
                    "https://images.trvl-media.com/lodging/7000000/6470000/6469000/6468921/9c44569e.jpg"
                ],
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
                images: [
                    "https://images.trvl-media.com/lodging/85000000/84010000/84005700/84005650/0b1b9e2f.jpg",
                    "https://images.trvl-media.com/lodging/85000000/84010000/84005700/84005650/09477e77.jpg",
                    "https://images.trvl-media.com/lodging/85000000/84010000/84005700/84005650/47f547c3.jpg",
                    "https://images.trvl-media.com/lodging/85000000/84010000/84005700/84005650/c255776d.jpg",
                    "https://images.trvl-media.com/lodging/85000000/84010000/84005700/84005650/c888d3e6.jpg"
                ],
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
                images: [
                    "https://images.trvl-media.com/lodging/122000000/121020000/121014600/121014593/d81615f2.jpg",
                    "https://images.trvl-media.com/lodging/122000000/121020000/121014600/121014593/589ca3e6.jpg",
                    "https://images.trvl-media.com/lodging/122000000/121020000/121014600/121014593/f512c5b3.jpg",
                    "https://images.trvl-media.com/lodging/122000000/121020000/121014600/121014593/3a9a1170.jpg",
                    "https://images.trvl-media.com/lodging/122000000/121020000/121014600/121014593/e009a0a4.jpg"
                ],
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
                images: [
                    "https://images.trvl-media.com/lodging/105000000/104550000/104549994/104549994/0a7b6b15.jpg",
                    "https://images.trvl-media.com/lodging/105000000/104550000/104549994/104549994/a30c5e7b.jpg",
                    "https://images.trvl-media.com/lodging/105000000/104550000/104549994/104549994/d5c179c6.jpg",
                    "https://images.trvl-media.com/lodging/105000000/104550000/104549994/104549994/b187514a.jpg"
                ],
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
                images: [
                    "https://images.trvl-media.com/lodging/101000000/10070000/100699912/100699912/28e3760a.jpg",
                    "https://images.trvl-media.com/lodging/101000000/10070000/100699912/100699912/2a36d2c1.jpg",
                    "https://images.trvl-media.com/lodging/101000000/10070000/100699912/100699912/e6f2129c.jpg",
                    "https://images.trvl-media.com/lodging/101000000/10070000/100699912/100699912/e6c98f98.jpg",
                    "https://images.trvl-media.com/lodging/101000000/10070000/100699912/100699912/e29a8a76.jpg"
                ],
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
                images: [
                    "https://images.trvl-media.com/lodging/7000000/6310000/6307900/6307879/c1f51f5c.jpg",
                    "https://images.trvl-media.com/lodging/7000000/6310000/6307900/6307879/c464c295.jpg",
                    "https://images.trvl-media.com/lodging/7000000/6310000/6307900/6307879/3a8c3e80.jpg",
                    "https://images.trvl-media.com/lodging/7000000/6310000/6307900/6307879/d1e1f185.jpg",
                    "https://images.trvl-media.com/lodging/7000000/6310000/6307900/6307879/5a914c62.jpg"
                ],
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
                images: [
                    "https://images.trvl-media.com/lodging/83000000/82910000/82903200/82903166/02a38210.jpg",
                    "https://images.trvl-media.com/lodging/83000000/82910000/82903200/82903166/d5b035a0.jpg",
                    "https://images.trvl-media.com/lodging/83000000/82910000/82903200/82903166/1b1386d3.jpg",
                    "https://images.trvl-media.com/lodging/83000000/82910000/82903200/82903166/5b8f10b7.jpg"
                ],
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
                images: [
                    "https://images.trvl-media.com/lodging/16000000/15410000/15401000/15400993/9c7161b9.jpg",
                    "https://images.trvl-media.com/lodging/16000000/15410000/15401000/15400993/78ab798e.jpg",
                    "https://images.trvl-media.com/lodging/16000000/15410000/15401000/15400993/29c4287c.jpg",
                    "https://images.trvl-media.com/lodging/16000000/15410000/15401000/15400993/3887f4fe.jpg",
                    "https://images.trvl-media.com/lodging/16000000/15410000/15401000/15400993/461ca607.jpg"
                ],
                amenities: ["Piscina", "Café da manhã incluído", "Wi-Fi Grátis", "Ar-condicionado"],
                pros: ["Localização central, perto da Passarela do Descobrimento", "Boa estrutura com piscina e terraço", "Café da manhã bem avaliado"],
                cons: ["Preço mais elevado (inclui taxas)", "Avaliação ligeiramente inferior às outras", "Pode ser mais movimentado por ser no centro"],
                distanceToCenter: "Localizado no centro, a 13 min de caminhada da Passarela do Descobrimento.",
                bookingUrl: "https://www.hoteis.com/ho599588/marlim-porto-hotel-porto-seguro-brasil/?chkin=2025-12-20&chkout=2025-12-24"
            }
        ].sort((a, b) => a.pricePerNight - b.pricePerNight);

const paratyAccommodations: AccommodationOption[] = [
    {
        name: "Pousada Entre Folhas",
        city: "Paraty",
        rating: 9.0,
        pricePerNight: 234,
        totalPrice: 983,
        nights: 4,
        images: [
            "https://images.trvl-media.com/lodging/102000000/101040000/101036300/101036215/e8784a9e.jpg",
            "https://images.trvl-media.com/lodging/102000000/101040000/101036300/101036215/0e46a583.jpg",
            "https://images.trvl-media.com/lodging/102000000/101040000/101036300/101036215/6b95b8cf.jpg",
            "https://images.trvl-media.com/lodging/102000000/101040000/101036300/101036215/28491373.jpg",
            "https://images.trvl-media.com/lodging/102000000/101040000/101036300/101036215/22239f67.jpg"
        ],
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
        images: [
            "https://images.trvl-media.com/lodging/6000000/5150000/5142800/514276/d217730e.jpg",
            "https://images.trvl-media.com/lodging/6000000/5150000/5142800/514276/54f2c96c.jpg",
            "https://images.trvl-media.com/lodging/6000000/5150000/5142800/514276/b042c1ef.jpg",
            "https://images.trvl-media.com/lodging/6000000/5150000/5142800/514276/7eb7a030.jpg",
            "https://images.trvl-media.com/lodging/6000000/5150000/5142800/514276/a4d5e219.jpg"
        ],
        amenities: ["Piscina externa", "Café da manhã incluído", "Wi-Fi Grátis", "Estacionamento", "Sala de jogos"],
        pros: ["Avaliação 'Muito boa' (8.4)", "Café da manhã bem avaliado", "Piscina e área de lazer"],
        cons: ["Preço um pouco mais elevado", "Pode exigir uma pequena caminhada para o centro histórico"],
        distanceToCenter: "A 19 min de caminhada da Igreja Matriz.",
        bookingUrl: "https://www.hoteis.com/ho514276/pousada-camila-paraty-brasil/?chkin=2025-12-19&chkout=2025-12-23"
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
        images: [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/567990499.jpg",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/567990524.jpg",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/567990531.jpg",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/567990515.jpg",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/567990520.jpg"
        ],
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
        images: [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254425482.jpg",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254425487.jpg",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254425492.jpg",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254425497.jpg",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254425500.jpg"
        ],
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
        images: [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491039801.jpg",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491039810.jpg",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491039824.jpg",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491039832.jpg",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491039841.jpg"
        ],
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
                images: [
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/567990499.jpg",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/567990524.jpg",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/567990531.jpg",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/567990515.jpg",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/567990520.jpg"
                ],
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
                images: [
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254425482.jpg",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254425487.jpg",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254425492.jpg",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254425497.jpg",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254425500.jpg"
                ],
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
                images: [
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491039801.jpg",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491039810.jpg",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491039824.jpg",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491039832.jpg",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491039841.jpg"
                ],
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
                images: [
                    "https://images.trvl-media.com/lodging/121000000/120630000/120620100/120620019/5e1a2f6b.jpg",
                    "https://images.trvl-media.com/lodging/121000000/120630000/120620100/120620019/f3b8e2d4.jpg",
                    "https://images.trvl-media.com/lodging/121000000/120630000/120620100/120620019/d6c8e3a2.jpg",
                    "https://images.trvl-media.com/lodging/121000000/120630000/120620100/120620019/a7f5b4c1.jpg",
                    "https://images.trvl-media.com/lodging/121000000/120630000/120620100/120620019/c9d0e1b3.jpg"
                ],
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
        accommodations: paratyAccommodations,
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
                images: [
                    "https://images.trvl-media.com/lodging/120000000/119570000/119568100/119568035/05030493.jpg",
                    "https://images.trvl-media.com/lodging/120000000/119570000/119568100/119568035/3d68e278.jpg",
                    "https://images.trvl-media.com/lodging/120000000/119570000/119568100/119568035/209c1181.jpg",
                    "https://images.trvl-media.com/lodging/120000000/119570000/119568100/119568035/0e28f747.jpg",
                    "https://images.trvl-media.com/lodging/120000000/119570000/119568100/119568035/5f1f9699.jpg"
                ],
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
        accommodations: [...ilhaGrandeAccommodations, ...paratyAccommodations],
    }
  };