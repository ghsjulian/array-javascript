
function sortUsers(field, ascending = true) {
  return [...users].sort((a, b) => {
    let valA = a[field];
    let valB = b[field];

    // Handle undefined/null
    if (valA == null) return ascending ? 1 : -1;
    if (valB == null) return ascending ? -1 : 1;

    // Handle numeric fields
    if (typeof valA === 'number' && typeof valB === 'number') {
      return ascending ? valA - valB : valB - valA;
    }

    // Handle date strings (createdAt)
    if (field === "createdAt" || isIsoDate(valA)) {
      const dateA = new Date(valA);
      const dateB = new Date(valB);
      return ascending ? dateA - dateB : dateB - dateA;
    }

    // Handle boolean (true > false)
    if (typeof valA === 'boolean') {
      return ascending ? (valA === valB ? 0 : valA ? 1 : -1)
                       : (valA === valB ? 0 : valA ? -1 : 1);
    }

    // Fallback to string comparison
    return ascending
      ? valA.toString().localeCompare(valB.toString())
      : valB.toString().localeCompare(valA.toString());
  });
}

// Helper to detect ISO date strings
function isIsoDate(str) {
  return typeof str === 'string' && !isNaN(Date.parse(str));
}
// 🔍 Search users by field (name, username, email, etc.)
function searchUsers(field, value) {
  return users.filter(user => user[field]?.toString().toLowerCase().includes(value.toLowerCase()));
}

// 🔄 Sort users by any field (string, number, or date)
function sortUsers(field, ascending = true) {
  return [...users].sort((a, b) => {
    const valA = a[field];
    const valB = b[field];

    if (typeof valA === 'number') return ascending ? valA - valB : valB - valA;
    if (Date.parse(valA)) return ascending ? new Date(valA) - new Date(valB) : new Date(valB) - new Date(valA);
    return ascending ? valA.localeCompare(valB) : valB.localeCompare(valA);
  });
}

// ➕ Add a new user
function addUser(user) {
  users.push(user);
  console.log("User added.");
}

// 📝 Update a user by _id
function updateUser(id, updatedFields) {
  const index = users.findIndex(user => user._id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedFields };
    console.log("User updated.");
  } else {
    console.log("User not found.");
  }
}

// ❌ Remove a user by _id
function removeUser(id) {
  const index = users.findIndex(user => user._id === id);
  if (index !== -1) {
    users.splice(index, 1);
    console.log("User removed.");
  } else {
    console.log("User not found.");
  }
}
