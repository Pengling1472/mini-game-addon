export class Vector3 {
    x: number
    y: number
    z: number
    constructor( x, y = null, z = null ) {
        this.x = x
        this.y = y ?? x
        this.z = z ?? x
    }
    add( vector3: Vector3 ) {
        this.x + vector3.x
        this.y + vector3.y
        this.z + vector3.z
    }
    subtract( vector3: Vector3 ) {
        this.x - vector3.x
        this.y - vector3.y
        this.z - vector3.z
    }
    multiply( vector3: Vector3 ) {
        this.x * vector3.x
        this.y * vector3.y
        this.z * vector3.z
    }
}