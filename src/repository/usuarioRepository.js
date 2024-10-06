import con from "./connection.js";

export async function adicionarUsuario(usuario) {
  let comando = `
  insert into tb_usuario (nm_usuario)
		values (?);
  `;

  let registro = await con.query(comando, [usuario.nome]);

  let idGerado = registro[0].insertId;
  return idGerado;
}

export async function alterarUsuario(usuario, id) {
  let comando = `
  update tb_usuario
	set nm_usuario = ?
	where id_usuario = ?;
  `;

  let registro = await con.query(comando, [usuario.nome, id]);

  let linhasAfetadas = registro[0].affectedRows;
  return linhasAfetadas;
}

export async function deletarUsuario(id) {
  let comando = `
    delete from tb_usuario where id_usuario = ?;
  `;

  let registro = await con.query(comando, [id]);

  let linhasAfetadas = registro[0].affectedRows;
  return linhasAfetadas;
}

export async function selecionarUsuario() {
  let comando = `
    select id_usuario as idUsuario, 
    nm_usuario as nomeUsuario
    from tb_usuario
  `;

  let registro = await con.query(comando);

  let resposta = registro[0];

  return resposta;
}

export async function selecionarUsuarioPorId(id) {
  let comando = `
    select id_usuario as idUsuario, 
    nm_usuario as nomeUsuario
    from tb_usuario
    where id_usuario = ?;
  `;

  let registro = await con.query(comando, [id]);

  let info = registro[0];

  return info[0];
}
