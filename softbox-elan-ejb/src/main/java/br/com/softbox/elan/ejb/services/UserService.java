package br.com.softbox.elan.ejb.services;

import br.com.softbox.core.persistencia.ResultadoConsulta;
import br.com.softbox.core.util.Dados;

public interface UserService {
    ResultadoConsulta<Dados> getAll();
}
