package br.com.softbox.elan.services.config;

import io.swagger.jaxrs.config.BeanConfig;

import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;

public abstract class JaxRsConfig extends Application {

    private Set<Class<?>> resources;

    protected JaxRsConfig() {
        this.resources = new HashSet<>();
        BeanConfig beanConfig = new BeanConfig();
        beanConfig.setTitle("ELAN API Restfull");
        beanConfig.setVersion("0.0.1-SNAPSHOT");
        beanConfig.setBasePath("/elan-services/rest");
        beanConfig.setResourcePackage("br.com.softbox.elan.services.resources");
        beanConfig.setScan(true);
    }

    @Override
    public final Set<Class<?>> getClasses() {
        resources.add(io.swagger.jaxrs.listing.ApiListingResource.class);
        resources.add(io.swagger.jaxrs.listing.SwaggerSerializers.class);
        this.getRestResourceClass(resources);
        return resources;
    }

    abstract Set<Class<?>> getRestResourceClass(Set<Class<?>> resources);
}
