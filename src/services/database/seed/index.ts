export const createTable = `
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      code TEXT NOT NULL,
      name TEXT NOT NULL,
      available BOOLEAN NOT NULL,
      visible BOOLEAN NOT NULL,
      details_name TEXT NOT NULL,
      details_description TEXT NOT NULL,
      price_in_cents INTEGER NOT NULL,
      sale_price_in_cents INTEGER NOT NULL,
      rating REAL NOT NULL,
      image TEXT NOT NULL,
      stock_available BOOLEAN NOT NULL
    )
  `

export const initialData = `
 INSERT INTO products (
    code, name, available, visible, details_name, details_description, price_in_cents, sale_price_in_cents, rating, image, stock_available
) VALUES
(
    'D22-2077-006',
    'Tênis Nike Revolution 7 Feminino - Preto+Branco',
    1, 1, 
    'Tênis Nike Revolution 7 Feminino - Preto+Branco',
    'Carregamos o Revolution 7 com o tipo de amortecimento e suporte macio que pode mudar o seu mundo de corrida. Elegante como sempre, confortvel quando a borracha encontra a estrada e performtico para o ritmo desejado, uma evoluo de um favorito dos fs que oferece uma conduo macia e suave.',
    39999, 30399, 
    4.5,
    'https://static.netshoes.com.br/produtos/tenis-nike-revolution-7-feminino/26/JD8-6363-026/JD8-6363-026_zoom1.jpg?ts=1708096757?ims=544x',
    1
),
(
    'NQQ-4378-028',
    'Bola de Futebol Society Penalty 8 X - Branco+Verde Limão',
    1, 1, 
    'Bola de Futebol Society Penalty 8 X - Branco+Verde Limão',
    'Junte os amigos e desenvolva suas melhores jogadas com a Bola de Futebol Society da Penalty. Fabricada com material resistente, o modelo recebe uma dupla camada de colagem, reforçando ainda mais a junção dos gomos e garantindo a vida útil da bola por muito mais tempo. As cores contrastantes ajudam na visualização dentro das quatro linhas. Seja o melhor do jogo e domine o adversário com a Penalty. Garanta já a sua!',
    22000, 17499, 
    4,
    'https://static.netshoes.com.br/produtos/bola-de-futebol-society-penalty-8-x/78/D23-5694-078/D23-5694-078_zoom1.jpg?ts=1695700132?ims=544x',
    1
),
(
    '3R2-0087-240-02',
    'Kit 4 Camiseta Masculina Segunda Pele Proteção Solar UV Térmica Praia Manga Longa Blusa Camisa - Cinza+Azul',
    0, 1, 
    'Kit 4 Camiseta Masculina Segunda Pele Proteção Solar UV Térmica Praia Manga Longa Blusa Camisa - Cinza+Azul',
    'As camisetas proteção UV masculina da Dellas, são produzidas em 100% Poliéster, permitindo movimentos mais intensos, e por um maior tempo de forma confortável. Elas se ajustam perfeitamente ao corpo, podendo ser usadas como segunda pele.',
    20000, 8690, 
    3.5,
    'https://static.netshoes.com.br/produtos/kit-4-camiseta-masculina-segunda-pele-protecao-solar-uv-termica-praia-manga-longa-blusa-camisa/40/3R2-0087-240/3R2-0087-240_zoom1.jpg?ts=1690411979?ims=544x',
    0
),
(
    '140-1040-008-01',
    'Mesa de Ping Pong / Tênis de Mesa Klopf - 12 mm - Azul',
    1, 1, 
    'Mesa de Ping Pong / Tênis de Mesa Klopf - 12 mm - Azul',
    'A Mesa de Tennis de Mesa Klopf - 12 mm é uma ótima opção para quem quer levar a sério o esporte, pois traz as medidas oficiais da ITTF. Também é uma ótima opção para reunir família e amigos.',
    119900, 98990, 
    3,
    'https://static.netshoes.com.br/produtos/mesa-de-ping-pong-tenis-de-mesa-klopf-12-mm/08/140-1040-008/140-1040-008_zoom1.jpg?ts=1712923154?ims=544x',
    1
),
(
    'FB9-4074-070',
    'Chuteira Society Adidas Deportivo II Unissex - Exclusiva - Preto',
    1, 1, 
    'Chuteira Society Adidas Deportivo II Unissex - Exclusiva - Preto',
    'Domine o jogo com habilidade nos pés com a Chuteira Society Adidas Deportivo II Unissex! Com design refinado, essa chuteira society Adidas unissex apresenta cabedal em sintético com costuras reforçadas que garantem resistência e durabilidade. A língua perfurada auxilia na ventilação interna, enquanto o solado em borracha oferece estabilidade. Por fim, o calcanhar anatômico assegura um ajuste macio e seguro. Não deixe para depois e compre já essa chuteira Adidas society!',
    44999, 18999, 
    4.5,
    'https://static.netshoes.com.br/produtos/chuteira-society-adidas-deportivo-ii-unissex-exclusiva/70/FB9-4074-070/FB9-4074-070_zoom1.jpg?ts=1710336224?ims=544x',
    1
),
(
    'BKB-0035-014-60',
    'Kit 3x Colágeno Tipo 2 + Vitaminas Joelho E Articulação 60 Capsulas Sabor Sem Sabor - Branco',
    1, 1, 
    'Kit 3x Colágeno Tipo 2 + Vitaminas Joelho E Articulação 60 Capsulas Sabor Sem Sabor - Branco',
    'Colágeno da Natural Foods! O Colágeno é uma proteína fundamental para o nosso organismo, responsável pela elasticidade e resistência da pele, saúde das unhas e cabelos, além de constituir as fibras que sustentam os tecidos do corpo. Entretanto, com o passar dos anos, nosso corpo começa a produzir menos colágeno, resultando em flacidez da pele, surgimento de rugas e linhas de expressão, pele desidratada, diminuição da densidade óssea, enfraquecimento de articulações e ligamentos.!',
    12582, 10190, 
    3,
    'https://static.netshoes.com.br/produtos/kit-3x-colageno-tipo-2-vitaminas-joelho-e-articulacao-60-capsulas-sabor-sem-sabor/14/BKB-0035-014/BKB-0035-014_zoom1.jpg?ts=1713881543?ims=544x',
    1
),
(
    'FDT-6437-004-38',
    'Sandália crocs classic mega crush clog bone - Bege',
    1, 1, 
    'Sandália crocs classic mega crush clog bone - Bege',
    'O classic clog recebe uma reformulação seriamente atraente. apresentando o classic mega crush clog, com um solado de borracha aprimorado, detalhes atualizados em torno da sola e uma plataforma pronta para levar qualquer roupa para o próximo nível. melhor ainda, a alça traseira e a parte superior são construídas para serem personalizadas com jibbitz™!',
    44900, 40410, 
    4,
    'https://static.netshoes.com.br/produtos/sandalia-crocs-classic-mega-crush-clog-bone/04/FDT-6437-004/FDT-6437-004_zoom1.jpg?ts=1716301112?ims=544x',
    1
),
(
    'F83-5256-006-01',
    'Boné New Era 9Forty New York Aba Curva Preto - Preto',
    1, 1, 
    'Boné New Era 9Forty New York Aba Curva Preto - Preto',
    'Descrição do Boné New Era 9Forty New York Aba Curva Preto A New Era foi fundada em 1920 nos Estados Unidos, é especializada em bonés, confecções e artigos esportivos, é a fornecedora oficial dos bonés para MLB (liga Americana de Beisebol), NFL (Liga Americana de Futebol Americano) e NBA (Liga Americana de Basquetebol)!',
    22990, 15190, 
    5,
    'https://static.netshoes.com.br/produtos/bone-new-era-9forty-new-york-aba-curva-preto/06/F83-5256-006/F83-5256-006_zoom1.jpg?ts=1694533028?ims=544x',
    1
);
  `
