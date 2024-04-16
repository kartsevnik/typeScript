
//==================================================================
// Пишет в виде функции при компиляции и более затратно для ресурсов
enum EnumRoles {
    ADMIN, GUEST, USER
}

//==================================================================
// С указанием констатнты в начале преобразует данные в индексы
const enum EnumColors {
    BLACK, WHITE, GREEN
}

interface EnumUser {
    role: EnumRoles
    color: EnumColors
}

const eUser: EnumUser = {
    role: EnumRoles.ADMIN,
    color: EnumColors.BLACK
}

//=====================REVERSE MAPPING=============================================

enum EnumRolesReverse {
    ADMIN = 0,
    GUEST = 1,
    USER = 2
}
console.log(EnumRolesReverse[EnumRolesReverse.ADMIN]);
