class UserDto {
  email
  name
  isActive
  id
  constructor(model) {
    this.email = model.email
    this.name = model.name
    this.id = model._id
    this.isActive = model.isActive
  }
}
module.exports = UserDto
