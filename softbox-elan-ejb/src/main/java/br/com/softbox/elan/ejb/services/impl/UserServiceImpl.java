package br.com.softbox.elan.ejb.services.impl;

import br.com.softbox.core.persistencia.ResultadoConsulta;
import br.com.softbox.core.util.Dados;
import br.com.softbox.elan.ejb.repositories.Repository;
import br.com.softbox.elan.ejb.services.UserService;

import javax.ejb.Local;
import javax.ejb.Stateless;
import javax.enterprise.context.Dependent;
import javax.inject.Inject;

@Stateless
@Dependent
@Local(UserService.class)
public class UserServiceImpl implements UserService {

    @Inject
    private Repository repository;

    @Override
    public ResultadoConsulta<Dados> getAll() {
        ResultadoConsulta<Dados> resultado = repository.consultaSimples("user").consultar();
        return resultado;
    }

}
