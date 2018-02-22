export class Switch{
	constructor(
	public nombre_switch: String,
	public cantidad_puertos: Number,
	public modelo: String,
	public marca:String,
	public direccion_ip:String,
	public vlan: String,
	public estado:String,
	public obs:String,
	public fecha: String,
	public puertos:String [],
	public departamento:String
	){};
};