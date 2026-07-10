import { Injectable } from '@angular/core';
import { supabase } from '../config/supabase';
import { Client } from '../interfaces/client.interface';

@Injectable({
  providedIn: 'root',
})

export class Clients {
  async getClients() {
    const { data, error } = await supabase.from('clients').select('*');
    if (error) {
      throw error;
    }
    return data;
  }

  async getClient(id: number) {
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .eq('id', id)
      .single();
    if (error) {
      throw error;
    }
    return data;
  }

  async addClient(client: Client) {
    const { error } = await supabase.from('clients').insert([client]);
    if (error) {
      throw error;
    }
  }

  async updateClient(id: number, client: Client) {
    const { error } = await supabase
      .from('clients')
      .update(client)
      .eq('id', id);
    if (error) {
      throw error;
    }
  }
  async deleteClient(id: number) {
    const { error } = await supabase.from('clients').delete().eq('id', id);
    if (error) {
      throw error;
    } //cierra if
  } //cierra delete
} //cierra class
