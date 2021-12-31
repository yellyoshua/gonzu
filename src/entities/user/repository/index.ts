import Supabase, { SupabaseClient } from "@supabase/supabase-js";

export class UserRepository {
  private client: SupabaseClient;
  constructor() {
    if (!process.env.SUPABASE_AUTH_URL || !process.env.SUPABASE_AUTH_TOKEN)
      throw new Error(
        '"SUPABASE_AUTH_URL" or "SUPABASE_AUTH_TOKEN" environement variable not found! (requerid)'
      );

    this.client = Supabase.createClient(
      process.env.SUPABASE_AUTH_URL,
      process.env.SUPABASE_AUTH_TOKEN
    );
  }

  getCurrrentSession() {
    return this.client.auth.session();
  }

  async login(email: string, password: string) {
    const { user, session, error } = await this.client.auth.signIn({
      email,
      password,
    });

    if (!session || error)
      throw new Error("Ocurrio un error al crear la sessión");
    if (!user) throw new Error("Usuario no encontrado");

    return { session, user };
  }
}
