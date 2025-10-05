
import municipios from './municipios.json';
import estados from './estados.json';
import regioes from './regioes.json'
import {mongoose} from '../database/mongodb'
import { StateType } from 'src/models/state.dto';

// info obtida da api de localidades do ibge
export async function initDatabase() {
	try {
		const estadosCollection = mongoose.models.Estado;
		await estadosCollection.deleteMany({});
		await estadosCollection.insertMany(estados);

		const regioesCollection = mongoose.models.Regiao;
		await regioesCollection.deleteMany({});
		await regioesCollection.insertMany(regioes)

		const cidadesCollection = mongoose.models.Cidade;
		await cidadesCollection.deleteMany({});

		const cidades = municipios.map((municipio: any) => {
			const ufSigla = municipio['regiao-imediata']?.['regiao-intermediaria']?.UF?.sigla;
			const uf = estados.find((estado: StateType) => estado.sigla === ufSigla);
			if (!uf) return null;
			const { id, ...estado } = uf;
			return {
				nome: municipio.nome,
				UF: estado
			};
		});

		await cidadesCollection.insertMany(cidades)

		console.log('Database inicializado com sucesso.');
	} catch (err) {
		console.error('Error initializing database:', err)
	}
}