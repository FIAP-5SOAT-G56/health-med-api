// import User from '@/core/domain/entities/usuario'

// export default class UserMapper {
//   static toDto (pedido: User): UserCreateDto {
//     const consumidor = pedido.consumidor ? ConsumidorMapper.toDto(pedido.consumidor) : undefined
//     return {
//       id: pedido.id,
//       consumidorId: pedido.consumidorId,
//       consumidor,
//       // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
//       itens: pedido.itens?.map(item => ItemUserMapper.toDto(item)),
//       total: pedido.total,
//       status: pedido.status,
//       pagamentoId: pedido.pagamentoId,
//       createdAt: pedido.createdAt,
//       updatedAt: pedido.updatedAt
//     }
//   }

//   static toDomainEntity (input: UserDto): User {
//     const consumidor = input.consumidor ? ConsumidorMapper.toDomainEntity(input.consumidor) : undefined
//     return new User({
//       id: input.id,
//       consumidorId: input.consumidorId,
//       consumidor,
//       // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
//       itens: input.itens?.map(item => ItemUserMapper.toDomainEntity(item)),
//       total: input.total,
//       status: input.status,
//       pagamentoId: input.pagamentoId,
//       createdAt: input.createdAt,
//       updatedAt: input.updatedAt
//     })
//   }
// }
