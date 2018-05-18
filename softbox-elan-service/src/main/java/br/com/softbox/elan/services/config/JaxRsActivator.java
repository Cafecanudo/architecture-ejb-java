package br.com.softbox.elan.services.config;

import br.com.softbox.elan.services.resources.impl.UserResourceImpl;

import javax.ws.rs.ApplicationPath;
import java.util.Set;

@ApplicationPath("/rest")
public class JaxRsActivator extends JaxRsConfig {

    @Override
    Set<Class<?>> getRestResourceClass(Set<Class<?>> resources) {
        resources.add(UserResourceImpl.class);
        return resources;
    }
}
