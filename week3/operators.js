let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function isHit() {
    // function will return true if a randomely generated number is greater than .5, false if les than .5
    return Math.random() > 0.5;
}

function shipCanFire() {
    // returns true if shipHealth is > 0 and ammo is above 0, false otherwise
    return shipHealth > 0 && shipAmmo > 0;
}

function isDestroyed(health) {
    // reduce shipHealth by 1 and + ammo by 3
    return shipHealth <= 0;
}

function reloadShip() {
    // reduce shipHealth by 1 and increase ammo by 3
    shipHealth--;
    shipAmmo += 3;
}

function fireShip() {
    if (shipCanFire()) {
        shipAmmo--;
        if (isHit()) {
            targetHealth--;
            console.log("hit - targetHealth:", targetHealth);
        } else {
            console.log("miss"); }
    } else {
        reloadShip();
        console.log("reloading, shipHealth:", shipHealth)
    }
}

function encounter(){
    console.log("You see a target:");
    if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
        fireShip();
        if (isDestroyed(targetHealth)) {
            console.log("Targe eliminated");
        }
        if (isDestroyed(shipHealth)) {
            console.log("ship destroyed")
        }
    }
}

encounter();