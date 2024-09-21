// import { ProdutoCategoriaEnum } from '@/core/domain/enums/produto-categoria.enum'

// interface SeedIngrediente {
//   nome: string
//   preco: number
//   imagemUrl: string
// }

// interface SeedProduto {
//   nome: string
//   imagemUrl: string
//   descricao: string
//   preco: number
//   categoria: ProdutoCategoriaEnum
//   ingredientes?: SeedIngrediente[]
// }

// export const produtos: SeedProduto[] = [
//   {
//     nome: 'Brabo Bacon Salad',
//     descricao: 'Composto pelo nosso pão tipo brioche, hambúrguer de carne 100% bovina, a nova Méquinese, exclusiva maionese especial com sabor de carne defumada, alface, tomate, fatias de bacon e queijo sabor cheddar',
//     preco: 38.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140900_rfl8qgktz4e.png',
//     ingredientes: [
//       {
//         nome: 'Mequinese',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140900_2xe9c7d8fg9.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_pvfmibs0py.png'
//       },
//       {
//         nome: 'Tomate',
//         preco: 1.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_11y26710oid.png'
//       },
//       {
//         nome: 'Bacon',
//         preco: 2.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_j5kpnng76ch.png'
//       },
//       {
//         nome: 'Carne 100% Bovina',
//         preco: 8.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_0dqd9e64ptoc.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161456_ari76l6t2uq.png'
//       },
//       {
//         nome: 'Molho do Cbo',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307180426_pqgp05llh6.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'Brabo Melt Crispy',
//     descricao: 'Delicioso molho cremoso sabor cheddar, hambúrguer de carne 100% bovina, a nova Méquinese, exclusiva maionese especial com sabor de carne defumada, cebola crispy, fatias de bacon, queijo sabor cheddar, tudo isso no pão tipo brioche trazendo uma explosão de sabores a cada mordida!',
//     preco: 38.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140900_rauubdzzzdn.png',
//     ingredientes: [
//       {
//         nome: 'Molho cremoso sabor Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140915_d9f97w5kck.png'
//       },
//       {
//         nome: 'Cebola Crispy',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140904_i875gap6hjs.png'
//       },
//       {
//         nome: 'Bacon',
//         preco: 2.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_j5kpnng76ch.png'
//       },
//       {
//         nome: 'Carne 100% Bovina',
//         preco: 8.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_0dqd9e64ptoc.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_fsxo5vzsq3w.png'
//       },
//       {
//         nome: 'Mequinese',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140903_174tbtr66s.png'
//       },
//       {
//         nome: 'Tomate',
//         preco: 1.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_zlcppxqjep.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_otw83nf6u7p.png'
//       },
//       {
//         nome: 'Molho do Cbo',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307180426_pqgp05llh6.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'Big Tasty Bacon Barbecue',
//     descricao: 'Um hambúrguer (100% carne bovina), queijo sabor emental, molho barbecue (molho não emulsionado sabor barbecue), fatias de bacon, tomate, alface americana, cebola crispy, molho tasty (molho emulsionado sabor carne grelhada) e pão com gergelim',
//     preco: 39.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307040437_ed3npn93pbd.png',
//     ingredientes: [
//       {
//         nome: 'Molho Tasty',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140905_3tqnv4wz2ay.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_pvfmibs0py.png'
//       },
//       {
//         nome: 'Tomate',
//         preco: 1.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_11y26710oid.png'
//       },
//       {
//         nome: 'Bacon',
//         preco: 2.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_j5kpnng76ch.png'
//       },
//       {
//         nome: 'Queijo sabor Emental',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_elt7icgecsb.png'
//       },
//       {
//         nome: 'Carne 100% Bovina',
//         preco: 8.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_0dqd9e64ptoc.png'
//       },
//       {
//         nome: 'Cebola Crispy',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140904_i875gap6hjs.png'
//       },
//       {
//         nome: 'Molho Barbecue',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140900_ifvib1be56.png'
//       },
//       {
//         nome: 'Molho do Cbo',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307180426_pqgp05llh6.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'Big Tasty',
//     descricao: 'Um hamburguer (100% carne bovina), queijo, tomate, alface americana, cebola e maionese Tasty',
//     preco: 34.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202310230456_rpjjxnxke7n.png',
//     ingredientes: [
//       {
//         nome: 'Molho Tasty',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140915_jt45sk6vjyn.png'
//       },
//       {
//         nome: 'Tomate',
//         preco: 1.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_11y26710oid.png'
//       },
//       {
//         nome: 'Queijo sabor Emental',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_elt7icgecsb.png'
//       },
//       {
//         nome: 'Carne 100% Bovina',
//         preco: 8.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_0dqd9e64ptoc.png'
//       },
//       {
//         nome: 'Cebola Fresca',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140919_xlil9li722m.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_pvfmibs0py.png'
//       },
//       {
//         nome: 'Picles',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140919_iqi2yx1go4k.png'
//       },
//       {
//         nome: 'Maionese',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_wwset2k57pq.png'
//       },
//       {
//         nome: 'Bacon',
//         preco: 2.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_8snowk2qlf.png'
//       },
//       {
//         nome: 'Molho cremoso sabor Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_dxzleb7avz5.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_metet42ipu.png'
//       },
//       {
//         nome: 'Molho do Cbo',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307180426_pqgp05llh6.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'Duplo Quarterão',
//     descricao: 'Dois hambúrgueres (100% carne bovina), mostarda, ketchup, cebola, queijo cheddar e pão com gergelim',
//     preco: 34.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202310230456_xk1eopjuxh.png',
//     ingredientes: [
//       {
//         nome: 'Carne 100% Bovina',
//         preco: 7.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250549_vizuh6wlo3p.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_fsxo5vzsq3w.png'
//       },
//       {
//         nome: 'Picles',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_1y0jnaa2w9d.png'
//       },
//       {
//         nome: 'Cebola Fresca',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140919_xlil9li722m.png'
//       },
//       {
//         nome: 'Bacon',
//         preco: 2.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_8snowk2qlf.png'
//       },
//       {
//         nome: 'Tomate',
//         preco: 1.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_zlcppxqjep.png'
//       },
//       {
//         nome: 'Molho Tasty',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_gjocsajw2uq.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_otw83nf6u7p.png'
//       },
//       {
//         nome: 'Molho do Cbo',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307180426_pqgp05llh6.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'Duplo Cheddar McMelt',
//     descricao: 'Dois hambúrgueres (100% carne bovina), molho cremoso sabor cheddar, cebola ao molho shoyu e pão escuro com gergelim',
//     preco: 34.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202310230456_by576mcwesd.png',
//     ingredientes: [
//       {
//         nome: 'Molho cremoso sabor Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140900_8db0fgseqdw.png'
//       },
//       {
//         nome: 'Carne 100% Bovina',
//         preco: 7.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250549_vizuh6wlo3p.png'
//       },
//       {
//         nome: 'Cebola Shoyu',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140900_w0eugg8hozk.png'
//       },
//       {
//         nome: 'Bacon',
//         preco: 2.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_8snowk2qlf.png'
//       },
//       {
//         nome: 'Cebola Crispy',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_w3zom0bmvf.png'
//       },
//       {
//         nome: 'Maionese',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_wwset2k57pq.png'
//       },
//       {
//         nome: 'Tomate',
//         preco: 1.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_zlcppxqjep.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_metet42ipu.png'
//       },
//       {
//         nome: 'Queijo sabor Emental',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_hsqkg24efm.png'
//       },
//       {
//         nome: 'Molho Barbecue',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140900_6c8tlvt2beh.png'
//       },
//       {
//         nome: 'Picles',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140919_iqi2yx1go4k.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_otw83nf6u7p.png'
//       },
//       {
//         nome: 'Molho do Cbo',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307180426_pqgp05llh6.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'Big Mac Duplo',
//     descricao: 'Quatro hambúrgueres (100% carne bovina), alface americana, queijo sabor cheddar, molho especial, cebola, picles e pão com gergelim',
//     preco: 29.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401090432_i45bt5ja1k.png',
//     ingredientes: [
//       {
//         nome: 'Molho Especial',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_nm1zj1oc9c.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161456_ari76l6t2uq.png'
//       },
//       {
//         nome: 'Carne 100% Bovina',
//         preco: 6.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202106170527_1ui6lpekylw.png'
//       },
//       {
//         nome: 'Picles',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_1y0jnaa2w9d.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_pvfmibs0py.png'
//       },
//       {
//         nome: 'Cebola Reidratada',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_j4k9tosvnvn.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'Big Mac Bacon',
//     descricao: 'Dois hambúrgueres (100% carne bovina), alface americana, queijo sabor cheddar, molho especial, cebola, picles, bacon e pão com gergelim',
//     preco: 27.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202311280420_qlsnahr4cd.png',
//     ingredientes: [
//       {
//         nome: 'Molho Especial',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_nm1zj1oc9c.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161456_ari76l6t2uq.png'
//       },
//       {
//         nome: 'Carne 100% Bovina',
//         preco: 6.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_lfc0o3e7wao.png'
//       },
//       {
//         nome: 'Bacon',
//         preco: 2.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_hv7ygrrewat.png'
//       },
//       {
//         nome: 'Picles',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_1y0jnaa2w9d.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_pvfmibs0py.png'
//       },
//       {
//         nome: 'Cebola Reidratada',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_j4k9tosvnvn.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'Big Mac',
//     descricao: 'Dois hambúrgueres (100% carne bovina), alface americana, queijo cheddar, maionese Big Mac, cebola, picles e pão com gergelim',
//     preco: 25.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202311280420_apcqg1lb45.png',
//     ingredientes: [
//       {
//         nome: 'Molho Especial',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_6hzfdo7b024.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161456_ari76l6t2uq.png'
//       },
//       {
//         nome: 'Carne 100% Bovina',
//         preco: 6.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_lfc0o3e7wao.png'
//       },
//       {
//         nome: 'Picles',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_1y0jnaa2w9d.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_pvfmibs0py.png'
//       },
//       {
//         nome: 'Cebola Reidratada',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_j4k9tosvnvn.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'Quarterão Com Queijo',
//     descricao: 'Um hambúrguer (100% carne bovina), queijo cheddar, picles, cebola, ketchup, mostarda e pão com gergelim',
//     preco: 26.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202312190426_tfqe34bm55k.png',
//     ingredientes: [
//       {
//         nome: 'Carne 100% Bovina',
//         preco: 7.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_tt6a69rr8z.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_fsxo5vzsq3w.png'
//       },
//       {
//         nome: 'Picles',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_1y0jnaa2w9d.png'
//       },
//       {
//         nome: 'Cebola Fresca',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140919_xlil9li722m.png'
//       },
//       {
//         nome: 'Bacon',
//         preco: 2.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_8snowk2qlf.png'
//       },
//       {
//         nome: 'Tomate',
//         preco: 1.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_zlcppxqjep.png'
//       },
//       {
//         nome: 'Molho Tasty',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_gjocsajw2uq.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_otw83nf6u7p.png'
//       },
//       {
//         nome: 'Molho do Cbo',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307180426_pqgp05llh6.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'Cheddar McMelt',
//     descricao: 'Um hambúrguer (100% carne bovina), molho cremoso sabor cheddar, cebola ao molho shoyu e pão escuro com gergelim',
//     preco: 26.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202311280420_g5wc78rmsao.png',
//     ingredientes: [
//       {
//         nome: 'Molho cremoso sabor Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140915_c4tf7qfaa2d.png'
//       },
//       {
//         nome: 'Carne 100% Bovina',
//         preco: 7.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_tt6a69rr8z.png'
//       },
//       {
//         nome: 'Cebola Shoyu',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140915_h19falq0sq9.png'
//       },
//       {
//         nome: 'Bacon',
//         preco: 2.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_8snowk2qlf.png'
//       },
//       {
//         nome: 'Maionese',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_wwset2k57pq.png'
//       },
//       {
//         nome: 'Tomate',
//         preco: 1.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_zlcppxqjep.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_metet42ipu.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_otw83nf6u7p.png'
//       },
//       {
//         nome: 'Molho do Cbo',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307180426_pqgp05llh6.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'McChicken',
//     descricao: 'Frango empanado, maionese, alface americana e pão com gergelim',
//     preco: 23.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202311280420_mw0sqa7brka.png',
//     ingredientes: [
//       {
//         nome: 'Maionese',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140919_jvwm7pjvqx.png'
//       },
//       {
//         nome: 'Carne Chicken',
//         preco: 6.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140915_1yd5h3d4q8r.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_pvfmibs0py.png'
//       },
//       {
//         nome: 'Bacon',
//         preco: 2.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_8snowk2qlf.png'
//       },
//       {
//         nome: 'Tomate',
//         preco: 1.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_zlcppxqjep.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_metet42ipu.png'
//       },
//       {
//         nome: 'Molho do Cbo',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307180426_pqgp05llh6.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'McChicken Bacon',
//     descricao: 'Frango empanado, maionese, bacon, alface americana e pão com gergelim',
//     preco: 25.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202311280420_6vg4z54lihk.png',
//     ingredientes: [
//       {
//         nome: 'Bacon',
//         preco: 2.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_7pis3hljn29.png'
//       },
//       {
//         nome: 'Maionese',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140919_jvwm7pjvqx.png'
//       },
//       {
//         nome: 'Carne Chicken',
//         preco: 6.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140915_1yd5h3d4q8r.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_pvfmibs0py.png'
//       },
//       {
//         nome: 'Tomate',
//         preco: 1.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_zlcppxqjep.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_metet42ipu.png'
//       },
//       {
//         nome: 'Molho do Cbo',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307180426_pqgp05llh6.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'Mccrispy Chicken Elite',
//     descricao: 'Composto por pão tipo brioche com batata, molho Honey&Fire, bacon em fatias, alface, tomate, queijo sabor cheddar e carne 100% de peito de frango, temperada e empanada',
//     preco: 31.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202311280420_dd30489ygl.png',
//     ingredientes: [
//       {
//         nome: 'Molho Honey&Fire',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202310100454_3f22kxc5inv.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_pvfmibs0py.png'
//       },
//       {
//         nome: 'Tomate',
//         preco: 1.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_11y26710oid.png'
//       },
//       {
//         nome: 'Bacon',
//         preco: 2.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_hv7ygrrewat.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161456_ari76l6t2uq.png'
//       },
//       {
//         nome: 'Frango Crispy',
//         preco: 7.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140909_0k1syjlab26r.png'
//       },
//       {
//         nome: 'Cebola Crispy',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_w3zom0bmvf.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'Mccrispy Chicken Deluxe',
//     descricao: 'Sanduíche composto pelo novo pão do Méqui, peito de frango temperado empanado, maionese, alface américa e tomate',
//     preco: 27.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202311280420_z3s3wldxei.png',
//     ingredientes: [
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_pvfmibs0py.png'
//       },
//       {
//         nome: 'Maionese',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140919_jvwm7pjvqx.png'
//       },
//       {
//         nome: 'Tomate',
//         preco: 1.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_11y26710oid.png'
//       },
//       {
//         nome: 'Frango Crispy',
//         preco: 7.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140909_0k1syjlab26r.png'
//       },
//       {
//         nome: 'Bacon',
//         preco: 2.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_8snowk2qlf.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_metet42ipu.png'
//       },
//       {
//         nome: 'Molho do Cbo',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307180426_pqgp05llh6.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'Mccrispy Chicken Melt & Bacon',
//     descricao: 'Sanduíche composto por pão tipo brioche com batata, carne 100% de peito de frango, temperada e empanada, molho cremoso sabor cheddar e fatias de bacon',
//     preco: 29.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202311280420_2rqf11f2d79.png',
//     ingredientes: [
//       {
//         nome: 'Molho cremoso sabor Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140915_c4tf7qfaa2d.png'
//       },
//       {
//         nome: 'Bacon',
//         preco: 2.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_j5kpnng76ch.png'
//       },
//       {
//         nome: 'Frango Crispy',
//         preco: 7.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140909_0k1syjlab26r.png'
//       },
//       {
//         nome: 'Tomate',
//         preco: 1.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_zlcppxqjep.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_metet42ipu.png'
//       },
//       {
//         nome: 'Molho do Cbo',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307180426_pqgp05llh6.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'Mccrispy Chicken Legend',
//     descricao: 'O novo Mccrispy Chicken Legend tem o sabor e os ingredientes que você ama. Ele é composto por pão tipo brioche com batata, carne 100% de peito de frango, temperada e empanada, molho do Cbo, cebola crispy, bacon em fatias, alface americana e queijo sabor cheddar',
//     preco: 31.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202311280420_77amf4xrl7e.png',
//     ingredientes: [
//       {
//         nome: 'Molho do Cbo',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140904_uxyeh6zh4a.png'
//       },
//       {
//         nome: 'Cebola Crispy',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140904_i875gap6hjs.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_pvfmibs0py.png'
//       },
//       {
//         nome: 'Bacon',
//         preco: 2.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_j5kpnng76ch.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161456_ari76l6t2uq.png'
//       },
//       {
//         nome: 'Frango Crispy',
//         preco: 7.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140909_0k1syjlab26r.png'
//       },
//       {
//         nome: 'Tomate',
//         preco: 1.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_zlcppxqjep.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'McNífico Bacon',
//     descricao: 'Um hambúrguer (100% carne bovina), bacon, alface americana, cebola, queijo cheddar, tomate, maionese, ketchup, mostarda e pão com gergelim',
//     preco: 29.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202311280420_bz6ef44z7b8.png',
//     ingredientes: [
//       {
//         nome: 'Maionese',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140919_jvwm7pjvqx.png'
//       },
//       {
//         nome: 'Tomate',
//         preco: 1.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_11y26710oid.png'
//       },
//       {
//         nome: 'Bacon',
//         preco: 2.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_j5kpnng76ch.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161456_ari76l6t2uq.png'
//       },
//       {
//         nome: 'Carne 100% Bovina',
//         preco: 7.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_tt6a69rr8z.png'
//       },
//       {
//         nome: 'Cebola Fresca',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140919_xlil9li722m.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_pvfmibs0py.png'
//       },
//       {
//         nome: 'Cebola Crispy',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_w3zom0bmvf.png'
//       },
//       {
//         nome: 'Queijo sabor Emental',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_hsqkg24efm.png'
//       },
//       {
//         nome: 'Molho cremoso sabor Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_dxzleb7avz5.png'
//       },
//       {
//         nome: 'Picles',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140919_iqi2yx1go4k.png'
//       },
//       {
//         nome: 'Molho Tasty',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_gjocsajw2uq.png'
//       },
//       {
//         nome: 'Molho do Cbo',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307180426_pqgp05llh6.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'Triplo Burger',
//     descricao: 'Três hambúrgueres (100% carne bovina), queijo cheddar, cebola, picles, ketchup, mostarda e pão com gergelim',
//     preco: 24.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202311280420_fyvdi0pnt0w.png',
//     ingredientes: [
//       {
//         nome: 'Carne 100% Bovina',
//         preco: 6.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140915_71btv91oj53.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_fsxo5vzsq3w.png'
//       },
//       {
//         nome: 'Picles',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_1y0jnaa2w9d.png'
//       },
//       {
//         nome: 'Cebola Reidratada',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_j4k9tosvnvn.png'
//       },
//       {
//         nome: 'Bacon',
//         preco: 2.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_8snowk2qlf.png'
//       },
//       {
//         nome: 'Tomate',
//         preco: 1.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_zlcppxqjep.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_otw83nf6u7p.png'
//       },
//       {
//         nome: 'Cebola Crispy',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_w3zom0bmvf.png'
//       },
//       {
//         nome: 'Queijo sabor Emental',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_hsqkg24efm.png'
//       },
//       {
//         nome: 'Molho cremoso sabor Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_dxzleb7avz5.png'
//       },
//       {
//         nome: 'Molho do Cbo',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307180426_pqgp05llh6.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'Duplo Burger Com Queijo',
//     descricao: 'Dois hambúrgueres, uma explosão de sabor. Dois deliciosos hambúrgueres de carne 100% bovina, queijo cheddar derretido, picles, cebola picada, ketchup e mostarda',
//     preco: 24.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202311280420_6xzjfg8ov0f.png',
//     ingredientes: [
//       {
//         nome: 'Carne 100% Bovina',
//         preco: 6.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_lfc0o3e7wao.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161456_ari76l6t2uq.png'
//       },
//       {
//         nome: 'Picles',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_1y0jnaa2w9d.png'
//       },
//       {
//         nome: 'Cebola Reidratada',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_j4k9tosvnvn.png'
//       },
//       {
//         nome: 'Bacon',
//         preco: 2.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_8snowk2qlf.png'
//       },
//       {
//         nome: 'Tomate',
//         preco: 1.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_zlcppxqjep.png'
//       },
//       {
//         nome: 'Maionese',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_wwset2k57pq.png'
//       },
//       {
//         nome: 'Queijo sabor Emental',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_hsqkg24efm.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_otw83nf6u7p.png'
//       },
//       {
//         nome: 'Molho do Cbo',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307180426_pqgp05llh6.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'Duplo Burger Bacon',
//     descricao: 'Dois hambúrgueres (100% carne bovina), queijo cheddar, cebola, fatias de bacon, ketchup, mostarda e pão com gergelim',
//     preco: 24.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202311280420_n7n4ilpv0bs.png',
//     ingredientes: [
//       {
//         nome: 'Bacon',
//         preco: 2.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_j5kpnng76ch.png'
//       },
//       {
//         nome: 'Carne 100% Bovina',
//         preco: 6.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_lfc0o3e7wao.png'
//       },
//       {
//         nome: 'Cebola Reidratada',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_j4k9tosvnvn.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161456_ari76l6t2uq.png'
//       },
//       {
//         nome: 'Molho do Cbo',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307180426_pqgp05llh6.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'Chicken Jr',
//     descricao: 'Frango empanado, maionese, alface americana e pão com gergelim',
//     preco: 10.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202311280420_4ovlrnmzq2b.png',
//     ingredientes: [
//       {
//         nome: 'Maionese',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140919_jvwm7pjvqx.png'
//       },
//       {
//         nome: 'Carne Chicken Junior',
//         preco: 6.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_5259pf67swp.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_pvfmibs0py.png'
//       },
//       {
//         nome: 'Bacon',
//         preco: 2.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_8snowk2qlf.png'
//       },
//       {
//         nome: 'Molho Tasty',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_gjocsajw2uq.png'
//       },
//       {
//         nome: 'Cebola Crispy',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_w3zom0bmvf.png'
//       },
//       {
//         nome: 'Molho cremoso sabor Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_dxzleb7avz5.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_metet42ipu.png'
//       },
//       {
//         nome: 'Molho do Cbo',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307180426_pqgp05llh6.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'Mcfiesta',
//     descricao: 'Hambúrguer de carne 100% bovina, alface, tomate e molho sabor maionese no pão quentinho',
//     preco: 11.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202311280420_vrrmq6jqwf.png',
//     ingredientes: [
//       {
//         nome: 'Carne 100% Bovina',
//         preco: 6.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_0mrm501og2uf.png'
//       },
//       {
//         nome: 'Tomate',
//         preco: 1.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_11y26710oid.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_pvfmibs0py.png'
//       },
//       {
//         nome: 'Molho Tasty',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140905_3tqnv4wz2ay.png'
//       },
//       {
//         nome: 'Picles',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140919_iqi2yx1go4k.png'
//       },
//       {
//         nome: 'Cebola Fresca',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140905_nyq9y3rkexi.png'
//       },
//       {
//         nome: 'Molho do Cbo',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307180426_pqgp05llh6.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'Cheeseburger',
//     descricao: 'Um hamburguer (100% carne bovina), queijo cheddar, cebola, picles, ketchup, mostarda e pão sem gergelim',
//     preco: 11.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202311280420_ea4gsj1tp5t.png',
//     ingredientes: [
//       {
//         nome: 'Carne 100% Bovina',
//         preco: 6.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_0mrm501og2uf.png'
//       },
//       {
//         nome: 'Fatia Queijo Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161456_ari76l6t2uq.png'
//       },
//       {
//         nome: 'Picles',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_1y0jnaa2w9d.png'
//       },
//       {
//         nome: 'Cebola Reidratada',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_j4k9tosvnvn.png'
//       },
//       {
//         nome: 'Tomate',
//         preco: 1.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_zlcppxqjep.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_otw83nf6u7p.png'
//       },
//       {
//         nome: 'Molho do Cbo',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307180426_pqgp05llh6.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'Hamburger',
//     descricao: 'Um Hamburguer (100% carne bovina), cebola, picles, ketchup, mostarda e pão sem gergelim',
//     preco: 10.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202311280420_lg5elwd3qf.png',
//     ingredientes: [
//       {
//         nome: 'Carne 100% Bovina',
//         preco: 6.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_0mrm501og2uf.png'
//       },
//       {
//         nome: 'Picles',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_1y0jnaa2w9d.png'
//       },
//       {
//         nome: 'Cebola Reidratada',
//         preco: 2,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_j4k9tosvnvn.png'
//       },
//       {
//         nome: 'Tomate',
//         preco: 1.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_zlcppxqjep.png'
//       },
//       {
//         nome: 'Alface',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140920_otw83nf6u7p.png'
//       },
//       {
//         nome: 'Molho do Cbo',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307180426_pqgp05llh6.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.LANCHE
//   },
//   {
//     nome: 'McFritas Cheddar Bacon',
//     descricao: 'As deliciosas batatas com molho cheddar e pedacinhos de bacon',
//     preco: 16.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250545_0r2tn50y9ay.png',
//     ingredientes: [
//       {
//         nome: 'Bacon',
//         preco: 2.9,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250550_hv7ygrrewat.png'
//       },
//       {
//         nome: 'Molho cremoso sabor Cheddar',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140915_d9f97w5kck.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.ACOMPANHAMENTO
//   },
//   {
//     nome: 'McFritas Grande',
//     descricao: 'Deliciosas batatas selecionadas, fritas, crocantes por fora, macias por dentro, douradas, irresistíveis, saborosas, famosas, e todos os outros adjetivos positivos que você quiser dar',
//     preco: 14.5,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202310180454_bjjzunanol.png',
//     ingredientes: [],
//     categoria: ProdutoCategoriaEnum.ACOMPANHAMENTO
//   },
//   {
//     nome: 'McFritas Média',
//     descricao: 'Deliciosas batatas selecionadas, fritas, crocantes por fora, macias por dentro, douradas, irresistíveis, saborosas, famosas, e todos os outros adjetivos positivos que você quiser dar',
//     preco: 12.5,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202310180454_haic5fodrmu.png',
//     ingredientes: [],
//     categoria: ProdutoCategoriaEnum.ACOMPANHAMENTO
//   },
//   {
//     nome: 'McFritas Pequena',
//     descricao: 'Deliciosas batatas selecionadas, fritas, crocantes por fora, macias por dentro, douradas, irresistíveis, saborosas, famosas, e todos os outros adjetivos positivos que você quiser dar',
//     preco: 10.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202310180454_8a24vs7mxux.png',
//     ingredientes: [],
//     categoria: ProdutoCategoriaEnum.ACOMPANHAMENTO
//   },
//   {
//     nome: 'McFritas Kids',
//     descricao: 'Deliciosas batatas selecionadas, fritas, crocantes por fora, macias por dentro, douradas, irresistíveis, saborosas, famosas, e todos os outros adjetivos positivos que você quiser dar',
//     preco: 8.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202308300435_njhdx4u0djn.png',
//     ingredientes: [],
//     categoria: ProdutoCategoriaEnum.ACOMPANHAMENTO
//   },
//   {
//     nome: 'Tomatinho',
//     descricao: 'Tomatinhos vermelhinhos, fresquinhos e saborosos',
//     preco: 8.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250545_vo7h4349sr.png',
//     categoria: ProdutoCategoriaEnum.ACOMPANHAMENTO
//   },
//   {
//     nome: 'Chicken McNuggets 20 unidades',
//     descricao: '20 Chicken McNuggets saborosos e crocantes - feito com carne 100% peito de frango',
//     preco: 31.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202308080425_dwcrpdls655.png',
//     ingredientes: [],
//     categoria: ProdutoCategoriaEnum.ACOMPANHAMENTO
//   },
//   {
//     nome: 'Chicken McNuggets 40 unidades',
//     descricao: '40 Chicken McNuggets saborosos e crocantes - feito com carne 100% peito de frango',
//     preco: 62.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202308080425_zvb11xv7pgm.png',
//     ingredientes: [],
//     categoria: ProdutoCategoriaEnum.ACOMPANHAMENTO
//   },
//   {
//     nome: 'Chicken McNuggets 10 unidades',
//     descricao: 'Crocantes, leves e deliciosos. Os frangos empanados mais irresistíveis do Mcdonald’s. Composto por 10 unidades',
//     preco: 17.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202308080425_3k6nufyzh2.png',
//     ingredientes: [],
//     categoria: ProdutoCategoriaEnum.ACOMPANHAMENTO
//   },
//   {
//     nome: 'Chicken McNuggets 6 unidades',
//     descricao: 'Os frangos empanados mais irresistíveis do Mcdonald’s',
//     preco: 13.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306280433_qe84zv0q3zp.png',
//     ingredientes: [],
//     categoria: ProdutoCategoriaEnum.ACOMPANHAMENTO
//   },
//   {
//     nome: 'Chicken McNuggets 4 unidades',
//     descricao: 'Crocantes, leves e deliciosos. Os frangos empanados mais irresistíveis do Mcdonald’s. Composto por 4 unidades',
//     preco: 10.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306280433_dg6a9ygdnxm.png',
//     ingredientes: [],
//     categoria: ProdutoCategoriaEnum.ACOMPANHAMENTO
//   },
//   {
//     nome: 'Molho Barbecue',
//     descricao: 'Escolha seu molho favorito para se deliciar com os chicken McNuggets, ou se preferir, com as deliciosas e crocantes McFritas',
//     preco: 2.5,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306280433_q05tsv0xwb.png',
//     categoria: ProdutoCategoriaEnum.ACOMPANHAMENTO
//   },
//   {
//     nome: 'Molho Agridoce',
//     descricao: 'Escolha seu molho favorito para se deliciar com os chicken McNuggets, ou se preferir, com as deliciosas e crocantes McFritas',
//     preco: 2.5,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306280433_q7q4jpfrfv9.png',
//     categoria: ProdutoCategoriaEnum.ACOMPANHAMENTO
//   },
//   {
//     nome: 'Molho Ranch',
//     descricao: 'Escolha seu molho favorito para se deliciar com os chicken McNuggets, ou se preferir, com as deliciosas e crocantes McFritas',
//     preco: 2.5,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306280433_fzsqek7akfw.png',
//     categoria: ProdutoCategoriaEnum.ACOMPANHAMENTO
//   },
//   {
//     nome: 'Molho Caipira',
//     descricao: 'Um melhor que o outro. O difícil é escolher qual é o melhor para se deliciar com os Chicken McNuggets. Que tal variar sempre?',
//     preco: 2.5,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306280433_3atb61gw0r.png',
//     categoria: ProdutoCategoriaEnum.ACOMPANHAMENTO
//   },
//   {
//     nome: 'McShake Ovomaltine 400ml',
//     descricao: 'O novo McShake é feito com leite e batido na hora com o delicioso Ovomaltine',
//     preco: 14.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_kbluqqegae.png',
//     ingredientes: [
//       {
//         nome: 'Ovomaltine',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_1uguxccauez.png'
//       },
//       {
//         nome: 'Cobertura de Caramelo',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_jf702nb074i.png'
//       },
//       {
//         nome: 'Cobertura de Morango',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_c4kbxgsrrau.png'
//       },
//       {
//         nome: 'Cobertura sabor Chocolate',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_yxcq8c1bku8.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.BEBIDA
//   },
//   {
//     nome: 'McShake Chocolate 400ml',
//     descricao: 'O novo McShake é feito com leite e batido na hora com o delicioso chocolate Kopenhagen',
//     preco: 14.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_fwq12i09y1w.png',
//     ingredientes: [
//       {
//         nome: 'Gotas de Chocolate Kopenhagen',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_7a40q0ye48l.png'
//       },
//       {
//         nome: 'Cobertura de Caramelo',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_gcqrz9ungvb.png'
//       },
//       {
//         nome: 'Cobertura de Morango',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_07zwgcv8ncfu.png'
//       },
//       {
//         nome: 'Cobertura sabor Chocolate',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_ioabg70muo.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.BEBIDA
//   },
//   {
//     nome: 'McShake Morango 400ml',
//     descricao: 'O novo McShake é feito com leite e batido na hora com calda de morango',
//     preco: 14.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_4hom2ze1npn.png',
//     ingredientes: [
//       {
//         nome: 'Cobertura de Morango',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_t0uvt85meso.png'
//       },
//       {
//         nome: 'Cobertura de Caramelo',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_zvhl1rzahmk.png'
//       },
//       {
//         nome: 'Cobertura sabor Chocolate',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_g4fdipxocsc.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.BEBIDA
//   },
//   {
//     nome: 'Coca-Cola 500ml',
//     descricao: 'Bebida gelada na medida certa para matar sua sede. Refrescante Coca-Cola 500ml',
//     preco: 12.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202310310526_437fo5dntx6.png',
//     ingredientes: [
//       {
//         nome: 'Gelo',
//         preco: 0,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140913_stydukcma1.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.BEBIDA
//   },
//   {
//     nome: 'Coca-Cola Sem Açúcar 500ml',
//     descricao: 'Bebida gelada na medida certa para matar sua sede. Refrescante Coca-Cola Sem Açúcar 500ml',
//     preco: 12.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202310310526_sdfboejquc.png',
//     ingredientes: [
//       {
//         nome: 'Gelo',
//         preco: 0,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140913_stydukcma1.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.BEBIDA
//   },
//   {
//     nome: 'Fanta Guaraná 500ml',
//     descricao: 'Bebida gelada na medida certa para matar sua sede. Refrescante Fanta Guaraná 500ml',
//     preco: 12.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202310310526_gk2jcjnpnfu.png',
//     ingredientes: [
//       {
//         nome: 'Gelo',
//         preco: 0,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140913_stydukcma1.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.BEBIDA
//   },
//   {
//     nome: 'Del Valle Laranja 500ml',
//     descricao: 'Deliciosos sabores à sua escolha. Néctar de fruta no sabor de Laranja 500ml',
//     preco: 12.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202310310526_6momoq3idc9.png',
//     categoria: ProdutoCategoriaEnum.BEBIDA
//   },
//   {
//     nome: 'Del Valle Uva 500ml',
//     descricao: 'Deliciosos sabores à sua escolha. Néctar de fruta no sabor de Uva 500ml',
//     preco: 12.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202310310526_mlpz79y984p.png',
//     categoria: ProdutoCategoriaEnum.BEBIDA
//   },
//   {
//     nome: 'Suco 100% Uva 200ml',
//     descricao: 'Suco 100% Uva é uma excelente opção de bebida sem conservantes para refrescar seu Dia',
//     preco: 12.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250545_feux1ay8a3.png',
//     categoria: ProdutoCategoriaEnum.BEBIDA
//   },
//   {
//     nome: 'Água Mineral Crystal Garrafa 500ml',
//     descricao: 'Levíssima, saudável e refrescante. Para quem gosta de matar a sede do jeito mais natural que existe',
//     preco: 12.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202307250545_c4wmd6n47dh.png',
//     categoria: ProdutoCategoriaEnum.BEBIDA
//   },
//   {
//     nome: 'McFlurry Kitkat com leite em pó mais querido do Brasil',
//     descricao: 'Composto por bebida láctea sabor baunilha, cobertura sabor chocolate, leite em pó e chocolate Kitkat',
//     preco: 15.5,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_76tganav4q8.png',
//     ingredientes: [
//       {
//         nome: 'Adicional de Kit Kat',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202309190424_f2p3dqkple.png'
//       },
//       {
//         nome: 'Adicional de leite em pó',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202309190424_wq089nlpee.png'
//       },
//       {
//         nome: 'Cobertura sabor Chocolate',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_ioabg70muo.png'
//       },
//       {
//         nome: 'Cobertura de Caramelo',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_gcqrz9ungvb.png'
//       },
//       {
//         nome: 'Cobertura de Morango',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_bgbif1f3gmn.png'
//       },
//       {
//         nome: 'Pacoca',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_fh0d9y58p4a.png'
//       },
//       {
//         nome: 'Amendoim',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_26ksv4zd0fm.png'
//       },
//       {
//         nome: 'Biju',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_1su94qvee9z.png'
//       },
//       {
//         nome: 'Ovomaltine',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_e2kcd9mf1dj.png'
//       },
//       {
//         nome: 'Ovomaltine Rocks',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_8gy5fr51d45.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.SOBREMESA
//   },
//   {
//     nome: 'McFlurry Ovomaltine Rocks com cobertura Chocolate',
//     descricao: 'Bebida láctea sabor baunilha, cobertura sabor chocolate, Ovomaltine em pó e pedaços crocantes de Ovomaltine Rocks',
//     preco: 14.5,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_vow26s0d25.png',
//     ingredientes: [
//       {
//         nome: 'Cobertura sabor Chocolate',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_5f7pjfqmmle.png'
//       },
//       {
//         nome: 'Ovomaltine Rocks',
//         preco: 2.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140919_42u9o5ocio4.png'
//       },
//       {
//         nome: 'Cobertura de Caramelo',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_miq6gg4w0c.png'
//       },
//       {
//         nome: 'Cobertura de Morango',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_bgbif1f3gmn.png'
//       },
//       {
//         nome: 'Amendoim',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_26ksv4zd0fm.png'
//       },
//       {
//         nome: 'Pacoca',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_fh0d9y58p4a.png'
//       },
//       {
//         nome: 'Biju',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_1su94qvee9z.png'
//       },
//       {
//         nome: 'Ovomaltine',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_e2kcd9mf1dj.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.SOBREMESA
//   },
//   {
//     nome: 'Top Sundae Chocolate',
//     descricao: 'Bebida láctea sabor baunilha com uma super camada de cobertura sabor chocolate e ainda por cima com farofa de paçoca. O canudo completa a tentação',
//     preco: 11.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_qep1tje9qzh.png',
//     ingredientes: [
//       {
//         nome: 'Pacoca',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140913_xh45c8mmk4b.png'
//       },
//       {
//         nome: 'Biju',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140913_iargl3wpok.png'
//       },
//       {
//         nome: 'Cobertura sabor Chocolate',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_5f7pjfqmmle.png'
//       },
//       {
//         nome: 'Cobertura de Caramelo',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_miq6gg4w0c.png'
//       },
//       {
//         nome: 'Cobertura de Morango',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_bgbif1f3gmn.png'
//       },
//       {
//         nome: 'Amendoim',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_26ksv4zd0fm.png'
//       },
//       {
//         nome: 'Ovomaltine',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_e2kcd9mf1dj.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.SOBREMESA
//   },
//   {
//     nome: 'Top Sundae Morango',
//     descricao: 'Bebida láctea sabor baunilha com uma super camada de cobertura de morango e ainda por cima com farofa de paçoca. O canudo completa a tentação',
//     preco: 11.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_g7nfsh6hky.png',
//     ingredientes: [
//       {
//         nome: 'Pacoca',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140913_xh45c8mmk4b.png'
//       },
//       {
//         nome: 'Cobertura de Morango',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_ytw3j83s2e.png'
//       },
//       {
//         nome: 'Biju',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140913_iargl3wpok.png'
//       },
//       {
//         nome: 'Cobertura sabor Chocolate',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_iq8yl8itbz.png'
//       },
//       {
//         nome: 'Cobertura de Caramelo',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_miq6gg4w0c.png'
//       },
//       {
//         nome: 'Amendoim',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_26ksv4zd0fm.png'
//       },
//       {
//         nome: 'Ovomaltine',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_e2kcd9mf1dj.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.SOBREMESA
//   },
//   {
//     nome: 'Top Sundae Caramelo',
//     descricao: 'Bebida láctea sabor baunilha com uma super camada de cobertura de caramelo e ainda por cima com farofa de paçoca. O canudo completa a tentação',
//     preco: 11.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_3dpdlnwd0wv.png',
//     ingredientes: [
//       {
//         nome: 'Pacoca',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140913_xh45c8mmk4b.png'
//       },
//       {
//         nome: 'Biju',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140913_iargl3wpok.png'
//       },
//       {
//         nome: 'Cobertura de Caramelo',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_xwaslekz5v.png'
//       },
//       {
//         nome: 'Cobertura sabor Chocolate',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_iq8yl8itbz.png'
//       },
//       {
//         nome: 'Cobertura de Morango',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_bgbif1f3gmn.png'
//       },
//       {
//         nome: 'Amendoim',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_26ksv4zd0fm.png'
//       },
//       {
//         nome: 'Ovomaltine',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_e2kcd9mf1dj.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.SOBREMESA
//   },
//   {
//     nome: 'Sundae Chocolate',
//     descricao: 'A medida certa entre cobertura sabor chocolate e bebida láctea sabor baunilha que pode fazer você viver uma experiência explosiva, além de amendoins crocantes. Desfrute dessa combinação perfeita!',
//     preco: 9.5,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_9nqucdwl8uc.png',
//     ingredientes: [
//       {
//         nome: 'Amendoim',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140913_p3es7uz4lx.png'
//       },
//       {
//         nome: 'Cobertura sabor Chocolate',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_5f7pjfqmmle.png'
//       },
//       {
//         nome: 'Cobertura de Caramelo',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_miq6gg4w0c.png'
//       },
//       {
//         nome: 'Cobertura de Morango',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_bgbif1f3gmn.png'
//       },
//       {
//         nome: 'Pacoca',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_fh0d9y58p4a.png'
//       },
//       {
//         nome: 'Biju',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_1su94qvee9z.png'
//       },
//       {
//         nome: 'Ovomaltine',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_e2kcd9mf1dj.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.SOBREMESA
//   },
//   {
//     nome: 'Sundae Caramelo',
//     descricao: 'A medida certa entre cobertura de caramelo e bebida láctea sabor baunilha que pode fazer você viver uma experiência explosiva, além de amendoins crocantes. Desfrute dessa combinação perfeita!',
//     preco: 9.5,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_po0tg4ml55f.png',
//     ingredientes: [
//       {
//         nome: 'Amendoim',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140913_p3es7uz4lx.png'
//       },
//       {
//         nome: 'Cobertura de Caramelo',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_xwaslekz5v.png'
//       },
//       {
//         nome: 'Cobertura sabor Chocolate',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_iq8yl8itbz.png'
//       },
//       {
//         nome: 'Cobertura de Morango',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_bgbif1f3gmn.png'
//       },
//       {
//         nome: 'Pacoca',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_fh0d9y58p4a.png'
//       },
//       {
//         nome: 'Biju',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_1su94qvee9z.png'
//       },
//       {
//         nome: 'Ovomaltine',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_e2kcd9mf1dj.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.SOBREMESA
//   },
//   {
//     nome: 'Sundae Morango',
//     descricao: 'A medida certa entre cobertura de morango e bebida láctea sabor baunilha que pode fazer você viver uma experiência explosiva, além de amendoins crocantes. Desfrute dessa combinação perfeita!',
//     preco: 9.5,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_4h3xrug0avr.png',
//     ingredientes: [
//       {
//         nome: 'Amendoim',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140913_p3es7uz4lx.png'
//       },
//       {
//         nome: 'Cobertura de Morango',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_ytw3j83s2e.png'
//       },
//       {
//         nome: 'Cobertura de Caramelo',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_miq6gg4w0c.png'
//       },
//       {
//         nome: 'Pacoca',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_fh0d9y58p4a.png'
//       },
//       {
//         nome: 'Biju',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_1su94qvee9z.png'
//       },
//       {
//         nome: 'Ovomaltine',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140914_e2kcd9mf1dj.png'
//       },
//       {
//         nome: 'Cobertura sabor Chocolate',
//         preco: 1.5,
//         imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202306140910_iq8yl8itbz.png'
//       }
//     ],
//     categoria: ProdutoCategoriaEnum.SOBREMESA
//   },
//   {
//     nome: 'Torta de Banana',
//     descricao: 'Deliciosa torta de massa quentinha e crocante com recheio de banana. Não utilize o campo de observações, as alterações devem ser realizadas no pedido',
//     preco: 8.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202310100457_oxegy2m1ana.png',
//     categoria: ProdutoCategoriaEnum.SOBREMESA
//   },
//   {
//     nome: 'Torta de Maçã',
//     descricao: 'Deliciosa torta de massa quentinha e crocante com recheio de maçã. Não utilize o campo de observações, as alterações devem ser realizadas no pedido',
//     preco: 8.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202310100457_vdf5q6rd6t.png',
//     categoria: ProdutoCategoriaEnum.SOBREMESA
//   },
//   {
//     nome: 'Petit Suisse',
//     descricao: 'Agora opção de sobremesa do McLanche Feliz; danoninho, fonte de cálcio e vitamina E, rico em vitamina D',
//     preco: 4.9,
//     imagemUrl: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/a46086fe-f27e-48d8-84be-77033520d8de/202401161454_t4np7fc1j7.png',
//     categoria: ProdutoCategoriaEnum.SOBREMESA
//   }
// ]
