const dietPlan = {
  "Lunedì": {
    colazione: [
      { type: "item", name: "Muesli", qty: 60, unit: "g" },
      { type: "item", name: "Proteine whey", qty: 25, unit: "g" },
      { type: "item", name: "Miele", qty: 2, unit: "cucchiaini" },
      { type: "item", name: "Mirtilli", qty: 50, unit: "g" },
      { type: "item", name: "Kiwi", qty: 1, unit: "pz" },
      {
        type: "choice",
        label: "Latte per porridge",
        options: [
          [{ name: "Latte di mandorla", qty: 250, unit: "ml" }],
          [{ name: "Latte di avena", qty: 250, unit: "ml" }],
        ],
      },
    ],
    spuntino1: [
      { type: "item", name: "Grana", qty: 30, unit: "g" },
      { type: "item", name: "Mandorle", qty: 30, unit: "g" },
      { type: "item", name: "Mandarini", qty: 2, unit: "pz" },
    ],
    pranzo: [
      { type: "item", name: "Pane di segale", qty: 80, unit: "g" },
      { type: "item", name: "Avocado", qty: 1, unit: "pz" },
      { type: "item", name: "Salmone affumicato", qty: 100, unit: "g" },
      { type: "item", name: "Pomodorini", qty: 150, unit: "g" },
      { type: "item", name: "Olio EVO", qty: 5, unit: "g" },
    ],
    cena: [
      { type: "item", name: "Patate", qty: 350, unit: "g" },
      { type: "item", name: "Asiago", qty: 200, unit: "g" },
      { type: "item", name: "Olio EVO", qty: 10, unit: "g" },
      { type: "item", name: "Finocchio", qty: 1, unit: "pz" },
    ],
  },
  "Martedì": {
    colazione: [
      { type: "item", name: "Arance", qty: 3, unit: "pz" },
      { type: "item", name: "Uova", qty: 2, unit: "pz" },
      { type: "item", name: "Avocado", qty: 1, unit: "pz" },
    ],
    spuntino1: [
      { type: "item", name: "Gallette di riso al cioccolato", qty: 3, unit: "pz" },
      { type: "item", name: "Banana", qty: 1, unit: "pz" },
    ],
    pranzo: [
      { type: "item", name: "Piadina integrale", qty: 80, unit: "g" },
      { type: "item", name: "Mozzarella di bufala", qty: 200, unit: "g" },
      {
        type: "choice",
        label: "Verdure per piadina",
        options: [
          [{ name: "Radicchio", qty: 50, unit: "g" }],
          [{ name: "Lattuga", qty: 50, unit: "g" }],
        ],
      },
      { type: "item", name: "Olio EVO", qty: 5, unit: "g" },
    ],
    cena: [
      { type: "item", name: "Filetto di bovino", qty: 300, unit: "g" },
      {
        type: "choice",
        label: "Contorno",
        options: [
          [{ name: "Spinaci", qty: 200, unit: "g" }],
          [{ name: "Broccoli", qty: 200, unit: "g" }],
        ],
      },
      { type: "item", name: "Olio EVO", qty: 5, unit: "g" },
      { type: "item", name: "Pane di segale", qty: 65, unit: "g" },
    ],
  },
  "Mercoledì": {
    colazione: [
      { type: "item", name: "Proteine whey", qty: 25, unit: "g" },
      { type: "item", name: "Banana", qty: 1, unit: "pz" },
      { type: "item", name: "Mirtilli", qty: 50, unit: "g" },
      { type: "item", name: "Burro d'arachidi", qty: 3, unit: "cucchiaini" },
      {
        type: "choice",
        label: "Latte per smoothie",
        options: [
          [{ name: "Latte di mandorla", qty: 250, unit: "ml" }],
          [{ name: "Latte di avena", qty: 250, unit: "ml" }],
        ],
      },
    ],
    spuntino1: [
      {
        type: "choice",
        label: "Opzione spuntino",
        options: [
          [{ name: "Barretta proteica", qty: 1, unit: "pz" }],
          [
            { name: "Dessert proteico Milk Pro", qty: 1, unit: "pz" },
            { name: "Mela", qty: 1, unit: "pz" },
          ],
        ],
      },
    ],
    pranzo: [
      { type: "item", name: "Pasta integrale", qty: 120, unit: "g" },
      { type: "item", name: "Guanciale", qty: 40, unit: "g" },
      { type: "item", name: "Pecorino", qty: 20, unit: "g" },
      { type: "item", name: "Salsa di pomodoro", qty: 200, unit: "ml" },
      { type: "item", name: "Finocchio", qty: 1, unit: "pz" },
    ],
    cena: [
      {
        type: "choice",
        label: "Spiedini",
        options: [
          [{ name: "Spiedini di carne", qty: 3, unit: "pz" }],
          [{ name: "Spiedini di pesce", qty: 3, unit: "pz" }],
        ],
      },
      { type: "item", name: "Finocchio", qty: 1, unit: "pz" },
      { type: "item", name: "Olio EVO", qty: 5, unit: "g" },
    ],
  },
  "Giovedì": {
    colazione: [
      { type: "item", name: "Arance", qty: 3, unit: "pz" },
      { type: "item", name: "Uova", qty: 2, unit: "pz" },
      { type: "item", name: "Avocado", qty: 1, unit: "pz" },
    ],
    spuntino1: [
      { type: "item", name: "Gallette di riso al cioccolato", qty: 3, unit: "pz" },
      { type: "item", name: "Banana", qty: 1, unit: "pz" },
    ],
    pranzo: [
      { type: "item", name: "Piadina integrale", qty: 80, unit: "g" },
      {
        type: "choice",
        label: "Formaggio per piadina",
        options: [
          [{ name: "Burrata", qty: 200, unit: "g" }],
          [{ name: "Ricotta fresca", qty: 200, unit: "g" }],
        ],
      },
      {
        type: "choice",
        label: "Verdure per piadina",
        options: [
          [{ name: "Radicchio", qty: 50, unit: "g" }],
          [{ name: "Lattuga", qty: 50, unit: "g" }],
        ],
      },
      { type: "item", name: "Olio EVO", qty: 5, unit: "g" },
    ],
    cena: [
      { type: "item", name: "Petti di pollo", qty: 300, unit: "g" },
      { type: "item", name: "Pan grattato", qty: 30, unit: "g" },
      { type: "item", name: "Finocchio", qty: 1, unit: "pz" },
      {
        type: "choice",
        label: "Contorno",
        options: [
          [{ name: "Spinaci", qty: 200, unit: "g" }],
          [{ name: "Broccoli", qty: 200, unit: "g" }],
        ],
      },
      { type: "item", name: "Olio EVO", qty: 5, unit: "g" },
      { type: "item", name: "Pane di segale", qty: 65, unit: "g" },
    ],
  },
  "Venerdì": {
    colazione: [
      { type: "item", name: "Proteine whey", qty: 25, unit: "g" },
      { type: "item", name: "Banana", qty: 1, unit: "pz" },
      { type: "item", name: "Mirtilli", qty: 50, unit: "g" },
      { type: "item", name: "Burro d'arachidi", qty: 3, unit: "cucchiaini" },
      {
        type: "choice",
        label: "Latte per smoothie",
        options: [
          [{ name: "Latte di mandorla", qty: 250, unit: "ml" }],
          [{ name: "Latte di avena", qty: 250, unit: "ml" }],
        ],
      },
    ],
    spuntino1: [
      {
        type: "choice",
        label: "Opzione spuntino",
        options: [
          [{ name: "Barretta proteica", qty: 1, unit: "pz" }],
          [
            { name: "Dessert proteico Milk Pro", qty: 1, unit: "pz" },
            { name: "Mela", qty: 1, unit: "pz" },
          ],
        ],
      },
    ],
    pranzo: [
      { type: "item", name: "Pane di segale", qty: 80, unit: "g" },
      { type: "item", name: "Avocado", qty: 1, unit: "pz" },
      { type: "item", name: "Uova", qty: 3, unit: "pz" },
      { type: "item", name: "Pomodorini", qty: 150, unit: "g" },
      { type: "item", name: "Olio EVO", qty: 5, unit: "g" },
    ],
    cena: [
      {
        type: "choice",
        label: "Pesce",
        options: [
          [{ name: "Pesce fresco", qty: 300, unit: "g" }],
          [{ name: "Pesce surgelato", qty: 350, unit: "g" }],
        ],
      },
      { type: "item", name: "Finocchio", qty: 1, unit: "pz" },
      { type: "item", name: "Patate", qty: 250, unit: "g" },
      { type: "item", name: "Olio EVO", qty: 5, unit: "g" },
    ],
  },
  "Sabato": {
    colazione: [
      { type: "item", name: "Muesli", qty: 60, unit: "g" },
      { type: "item", name: "Proteine whey", qty: 25, unit: "g" },
      { type: "item", name: "Miele", qty: 2, unit: "cucchiaini" },
      { type: "item", name: "Mirtilli", qty: 50, unit: "g" },
      { type: "item", name: "Kiwi", qty: 1, unit: "pz" },
      {
        type: "choice",
        label: "Latte per porridge",
        options: [
          [{ name: "Latte di mandorla", qty: 250, unit: "ml" }],
          [{ name: "Latte di avena", qty: 250, unit: "ml" }],
        ],
      },
    ],
    spuntino1: [
      { type: "item", name: "Grana", qty: 30, unit: "g" },
      { type: "item", name: "Mandorle", qty: 30, unit: "g" },
      { type: "item", name: "Mandarini", qty: 2, unit: "pz" },
    ],
    pranzo: [
      { type: "item", name: "Pasta integrale", qty: 120, unit: "g" },
      { type: "item", name: "Guanciale", qty: 40, unit: "g" },
      { type: "item", name: "Pecorino", qty: 20, unit: "g" },
      { type: "item", name: "Uova", qty: 1, unit: "pz" },
      { type: "item", name: "Finocchio", qty: 1, unit: "pz" },
    ],
    cena: [
      { type: "item", name: "Cena libera", qty: 1, unit: "nota" },
    ],
  },
  "Domenica": {
    colazione: [
      { type: "item", name: "Cena libera", qty: 1, unit: "nota" },
    ],
  },
};

const nightShiftSnack = [
  { type: "item", name: "Cioccolato fondente 75%", qty: 30, unit: "g" },
  {
    type: "choice",
    label: "Frutta secca",
    options: [
      [{ name: "Datteri secchi", qty: 3, unit: "pz" }],
      [{ name: "Fichi secchi", qty: 3, unit: "pz" }],
    ],
  },
  { type: "item", name: "Dessert proteico", qty: 1, unit: "pz" },
];

const dayMap = [
  "Domenica",
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
];

const pantryStorageKey = "blanca-pantry";
const nightShiftKey = "blanca-night-shift";

const todayLabel = document.getElementById("todayLabel");
const todayMeals = document.getElementById("todayMeals");
const missingList = document.getElementById("missingList");
const shoppingList = document.getElementById("shoppingList");
const pantryList = document.getElementById("pantryList");
const nightShiftToggle = document.getElementById("nightShiftToggle");
const addItemButton = document.getElementById("addItemButton");
const newItemName = document.getElementById("newItemName");
const newItemUnit = document.getElementById("newItemUnit");

const pantry = loadPantry();
nightShiftToggle.checked = loadNightShift();

function loadPantry() {
  try {
    const stored = JSON.parse(localStorage.getItem(pantryStorageKey));
    return stored && typeof stored === "object" ? stored : {};
  } catch (error) {
    return {};
  }
}

function savePantry() {
  localStorage.setItem(pantryStorageKey, JSON.stringify(pantry));
}

function loadNightShift() {
  return localStorage.getItem(nightShiftKey) === "true";
}

function saveNightShift(value) {
  localStorage.setItem(nightShiftKey, String(value));
}

function getTodayKey() {
  const now = new Date();
  return dayMap[now.getDay()];
}

function formatQty(qty, unit) {
  return `${qty} ${unit}`.trim();
}

function ensurePantryItem(name, unit) {
  if (!pantry[name]) {
    pantry[name] = { qty: 0, unit };
  } else if (!pantry[name].unit && unit) {
    pantry[name].unit = unit;
  }
}

function getPlanForDay(dayKey, includeNightShift) {
  const plan = dietPlan[dayKey];
  if (!plan) {
    return null;
  }
  const meals = { ...plan };
  if (includeNightShift) {
    meals.spuntinoNotturno = nightShiftSnack;
  }
  return meals;
}

function renderMeals(dayKey, meals) {
  todayLabel.textContent = `${dayKey} – piano alimentare del giorno`;
  todayMeals.innerHTML = "";

  if (!meals) {
    todayMeals.innerHTML = `<p class="muted">Nessun piano disponibile per ${dayKey}.</p>`;
    return;
  }

  Object.entries(meals).forEach(([mealName, ingredients]) => {
    const section = document.createElement("div");
    section.className = "meal";
    const title = document.createElement("h3");
    title.textContent = mealName.replace(/([A-Z])/g, " $1");
    section.appendChild(title);

    const list = document.createElement("ul");
    ingredients.forEach((ingredient) => {
      const item = document.createElement("li");
      if (ingredient.type === "item") {
        item.textContent = `${ingredient.name} – ${formatQty(ingredient.qty, ingredient.unit)}`;
      } else if (ingredient.type === "choice") {
        const options = ingredient.options
          .map((option) =>
            option
              .map((opt) => `${opt.name} (${formatQty(opt.qty, opt.unit)})`)
              .join(" + ")
          )
          .join(" oppure ");
        item.innerHTML = `<strong>${ingredient.label}:</strong> ${options}`;
      }
      list.appendChild(item);
    });

    section.appendChild(list);
    todayMeals.appendChild(section);
  });
}

function compareInventory(meals) {
  const missing = [];
  if (!meals) {
    return missing;
  }

  const checkItem = (item) => {
    ensurePantryItem(item.name, item.unit);
    const available = pantry[item.name].qty || 0;
    const shortage = item.qty - available;
    if (shortage > 0) {
      missing.push({ type: "item", ...item, shortage });
    }
  };

  Object.values(meals).forEach((ingredients) => {
    ingredients.forEach((ingredient) => {
      if (ingredient.type === "item") {
        checkItem(ingredient);
      } else if (ingredient.type === "choice") {
        const hasOption = ingredient.options.some((option) =>
          option.every((opt) => {
            ensurePantryItem(opt.name, opt.unit);
            return (pantry[opt.name].qty || 0) >= opt.qty;
          })
        );
        if (!hasOption) {
          missing.push({ type: "choice", label: ingredient.label, options: ingredient.options });
        }
      }
    });
  });

  return missing;
}

function renderMissing(missing) {
  if (!missing.length) {
    missingList.innerHTML = `<p class="success">Hai tutto il necessario per oggi!</p>`;
    return;
  }

  const list = document.createElement("ul");
  missing.forEach((item) => {
    const li = document.createElement("li");
    if (item.type === "item") {
      li.textContent = `${item.name}: mancano ${formatQty(item.shortage, item.unit)}`;
    } else if (item.type === "choice") {
      const options = item.options
        .map((option) =>
          option
            .map((opt) => `${opt.name} (${formatQty(opt.qty, opt.unit)})`)
            .join(" + ")
        )
        .join(" oppure ");
      li.innerHTML = `<strong>${item.label}:</strong> scegli e compra ${options}`;
    }
    list.appendChild(li);
  });
  missingList.innerHTML = "";
  missingList.appendChild(list);
}

function renderShoppingList(missing) {
  if (!missing.length) {
    shoppingList.innerHTML = `<p class="success">Nessun acquisto necessario per oggi.</p>`;
    return;
  }

  const list = document.createElement("ul");
  missing.forEach((item) => {
    const li = document.createElement("li");
    if (item.type === "item") {
      li.textContent = `${item.name} – ${formatQty(item.shortage, item.unit)}`;
    } else if (item.type === "choice") {
      const options = item.options
        .map((option) =>
          option
            .map((opt) => `${opt.name} (${formatQty(opt.qty, opt.unit)})`)
            .join(" + ")
        )
        .join(" oppure ");
      li.innerHTML = `<strong>${item.label}:</strong> ${options}`;
    }
    list.appendChild(li);
  });

  shoppingList.innerHTML = "";
  shoppingList.appendChild(list);
}

function renderPantry() {
  pantryList.innerHTML = "";
  const items = Object.entries(pantry)
    .map(([name, data]) => ({ name, ...data }))
    .sort((a, b) => a.name.localeCompare(b.name));

  items.forEach((item) => {
    const row = document.createElement("div");
    row.className = "pantry-row";

    const label = document.createElement("label");
    label.textContent = item.name;

    const input = document.createElement("input");
    input.type = "number";
    input.min = "0";
    input.step = "0.1";
    input.value = item.qty;
    input.addEventListener("input", () => {
      pantry[item.name].qty = Number(input.value);
      savePantry();
      updateView();
    });

    const unit = document.createElement("span");
    unit.className = "unit";
    unit.textContent = item.unit || "";

    row.appendChild(label);
    row.appendChild(input);
    row.appendChild(unit);
    pantryList.appendChild(row);
  });
}

function updateView() {
  const dayKey = getTodayKey();
  const meals = getPlanForDay(dayKey, nightShiftToggle.checked);
  renderMeals(dayKey, meals);
  const missing = compareInventory(meals);
  renderMissing(missing);
  renderShoppingList(missing);
  renderPantry();
  savePantry();
}

function seedPantry() {
  Object.values(dietPlan).forEach((day) => {
    Object.values(day).forEach((ingredients) => {
      ingredients.forEach((ingredient) => {
        if (ingredient.type === "item") {
          ensurePantryItem(ingredient.name, ingredient.unit);
        } else if (ingredient.type === "choice") {
          ingredient.options.forEach((option) => {
            option.forEach((opt) => ensurePantryItem(opt.name, opt.unit));
          });
        }
      });
    });
  });
  nightShiftSnack.forEach((ingredient) => {
    if (ingredient.type === "item") {
      ensurePantryItem(ingredient.name, ingredient.unit);
    } else if (ingredient.type === "choice") {
      ingredient.options.forEach((option) => {
        option.forEach((opt) => ensurePantryItem(opt.name, opt.unit));
      });
    }
  });
  savePantry();
}

addItemButton.addEventListener("click", () => {
  const name = newItemName.value.trim();
  if (!name) {
    return;
  }
  const unit = newItemUnit.value.trim();
  ensurePantryItem(name, unit);
  newItemName.value = "";
  newItemUnit.value = "";
  savePantry();
  updateView();
});

nightShiftToggle.addEventListener("change", () => {
  saveNightShift(nightShiftToggle.checked);
  updateView();
});

seedPantry();
updateView();
