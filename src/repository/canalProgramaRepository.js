import con from "./connection.js";

export async function adicionarPrograma(programa) {
  let comando = `
  insert into tb_canal_programa (	id_canal, nm_programa, ds_genero, hr_programa)
      values (?,?,?,?)
  `;

  let registro = await con.query(comando, [
    programa.canal,
    programa.nome,
    programa.genero,
    programa.hora
  ]);
  let info = registro[0];

  let idGerado = info.insertId;

  return idGerado;
}

export async function alterarPrograma(programa, id) {
  let comando = `
  update tb_canal_programa
	set id_canal = ?,
    nm_programa = ?,
    ds_genero = ?,
    hr_programa = ?
	where id_canal_programa = ?;
  `;

  let registro = await con.query(comando, [
    programa.canal,
    programa.nome,
    programa.genero,
    programa.hora,
    id,
  ]);
  let info = registro[0];

  let linhasAlteradas = info.affectedRows;

  return linhasAlteradas;
}

export async function deletarPrograma(id) {
  let comando = `
  delete from tb_canal_programa where id_canal_programa = ?;
  `;

  let registro = await con.query(comando, [id]);
  let info = registro[0];

  let linhasAlteradas = info.affectedRows;

  return linhasAlteradas;
}

export async function selecionarPrograma(id) {
  let comando = `
  select id_canal as canal,
   nm_programa as nomePrograma,
    ds_genero as genero,
     hr_programa from tb_canal_programa
     where id_canal = ?;  
  `;

  let registro = await con.query(comando, [id]);
  let info = registro[0];

  return info;
}
