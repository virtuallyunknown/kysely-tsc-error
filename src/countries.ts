import { db } from './db.js';

async function updateCountries() {
    await db
        .insertInto('countries')
        .values({ id: 1, name: 'whatever' })
        .onConflict(oc => oc
            .column('id')
            .doUpdateSet((eb) => ({
                id: eb.ref('excluded.id')
            }))
        )
        .execute();
}