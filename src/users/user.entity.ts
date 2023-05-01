import { BaseEntity } from "src/common/base.entity";
import { Column, Entity } from "typeorm";

@Entity({
  name: "users"
})
export class UserEntity extends BaseEntity {
  @Column({
    name: "first_name",
  })
  firstName: string

  @Column({
    name: "last_name",
  })
  lastName: string

  @Column({
    default: false,
    name: "is_active",
  })
  isActive: boolean
}