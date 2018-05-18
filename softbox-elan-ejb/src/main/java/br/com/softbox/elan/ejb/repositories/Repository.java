package br.com.softbox.elan.ejb.repositories;

import br.com.softbox.core.persistencia.Dialeto;
import br.com.softbox.core.persistencia.RepositorioBase;
import br.com.softbox.core.persistencia.exception.RepositorioException;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.annotation.Resource;
import javax.enterprise.context.RequestScoped;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

@RequestScoped
public class Repository extends RepositorioBase {

    @Resource(mappedName = "java:jboss/datasources/elanDS")
    protected DataSource dataSource;
    private Connection connection;

    @PostConstruct
    private void abrirConexao() {
        try {
            this.connection = dataSource.getConnection();
        } catch (SQLException e) {
            throw new RepositorioException("Erro ao abrir conexão com o banco de dados!", e);
        }
    }

    @PreDestroy
    private void fecharConexao() {
        if (this.connection != null) {
            try {
                this.connection.close();
            } catch (SQLException e) {
                throw new RepositorioException("Erro ao abrir conexão com o banco de dados!", e);
            }
        }
    }

    @Override
    protected Connection getConnection() {
        return this.connection;
    }

    @Override
    protected Dialeto getDialeto() {
        return Dialeto.POSTGRESQL;
    }
}
