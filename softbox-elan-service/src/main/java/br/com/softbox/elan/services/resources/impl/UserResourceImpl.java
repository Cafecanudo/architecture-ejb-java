package br.com.softbox.elan.services.resources.impl;

import br.com.softbox.core.persistencia.ResultadoConsulta;
import br.com.softbox.core.util.Dados;
import br.com.softbox.elan.ejb.services.UserService;
import br.com.softbox.elan.services.resources.UserResource;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;

@RequestScoped
public class UserResourceImpl implements UserResource {

    @EJB
    private UserService userService;

    @Override
    public ResultadoConsulta<Dados> getAll() {
        return userService.getAll();
    }

    @Override
    public Object insert() {
        return null;
    }

    @Override
    public Object update() {
        return null;
    }

    @Override
    public Object updateUnique() {
        return null;
    }

    @Override
    public void delete() {

    }
}
