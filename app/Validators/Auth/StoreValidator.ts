import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class StoreValidator {
  constructor (protected ctx: HttpContextContract) {}

  public schema = schema.create({
	email: schema.string({trim: true}, [rules.email()]),
	password: schema.string({trim: true}, [rules.minLength(6)])
  })

  public messages = {
	  'password.minLength': 'Utilize no mínimo 6 caracteres.',
	  email: 'E-mail não existe ou foi digitado incorretamente.'
  }
}
