/**
 * Created by zh on 2021/9/14.
 */
const db = new Dexie('friend_database');
db.version(1).stores({
    friends: 'name, showSize'
});

db.friends
    .put({
        name: 'Jay',
        showSize: '8',
        age: 33
    })
    .then(() => db.friends.filter((v) => v.name.includes('aay')).toArray())
    .then((v) => {
        console.log(v);
    })
    .catch((e) => {
        console.log(e);
    });

for (const veh of vehList.value) {
    const vehPost = computed(() => veh || null);
    const vehMarker = useVehMarker(mapData, vehPost);
    //...
}
