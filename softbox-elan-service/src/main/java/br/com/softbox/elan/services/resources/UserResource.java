package br.com.softbox.elan.services.resources;

import br.com.softbox.core.persistencia.ResultadoConsulta;
import br.com.softbox.core.util.Dados;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/user")
@Api(value = "User manager")
@ApiResponses(value = {
        @ApiResponse(code = 200, message = "Quando a solicitação for executada com sucesso."),
        @ApiResponse(code = 400, message = "Quando algum parâmetro obrigatório não for informado ou for inválido, será exibida a seguinte mensagem de resposta: “Campo(s) obrigatório(s) não preenchidos”."),
        @ApiResponse(code = 403, message = "Acesso negado. Token inválido"),
        @ApiResponse(code = 404, message = "Quando o registro não for encontrado."),
        @ApiResponse(code = 500, message = "Erro interno do servidor (Internal Server Error)")})
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public interface UserResource {

    @GET
    @ApiOperation(value = "getAll", notes = "Obter lista de todos registro.")
    ResultadoConsulta<Dados> getAll();

    @POST
    @ApiOperation(value = "insert", notes = "Insere um novo registro no banco")
    Object insert();

    @PUT
    @ApiOperation(value = "update", notes = "Atualiza todas as colunas do registro")
    Object update();

    @PATCH
    @ApiOperation(value = "updateUnique", notes = "Atualiza a coluna especifica do registro")
    Object updateUnique();

    @DELETE
    @ApiOperation(value = "delete", notes = "Deleta/Remove um novo registro do banco")
    void delete();

}
