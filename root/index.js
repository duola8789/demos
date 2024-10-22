function fn(rooms) {
  const visited = {
    0: true,
  };

  function dfs(keys) {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (!visited[key]) {
        if (rooms[key]) {
          visited[key] = true;
          dfs(rooms[key]);
        }
      }
    }
  }

  dfs(rooms[0]);

  return Object.keys(visited) === rooms.length;
}
console.log(fn([[1], [2], [3]]));
