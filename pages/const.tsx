export const steps = [
  {
    id: "75274a20-f0b4-42f7-acb9-5001daac9734",
    label: "Bâtiment",
    elements: [
      {
        id: "e97a361e-7b2c-47e4-88ca-3eb22d36f2dd",
        label: "Type de bâtiment",
        options: [
          {
            id: "0",
            label: "Individuel",
          },
          {
            id: "1",
            label: "Collectif",
          },
          {
            id: "2",
            label: "Professionnel",
          },
        ],
        placeholder: null,
        type: "SELECT",
        value: "0",
        validations: [],
      },
      {
        id: "ee403d68-8cba-4ef9-ba35-9b58988defad",
        label: "Âge du bâtiment",
        options: [
          {
            id: "0",
            label: "Neuf (< 2ans)",
          },
          {
            id: "1",
            label: "Ancien",
          },
        ],
        placeholder: null,
        type: "SELECT",
        value: "1",
        validations: [],
      },
      {
        id: "1abe86b8-fc8d-4036-8760-e387b1c081ed",
        label: "Nombre d'étages",
        options: [
          {
            id: "0",
            label: "Sol",
          },
          {
            id: "1",
            label: "1",
          },
          {
            id: "2",
            label: "2",
          },
          {
            id: "3",
            label: "3",
          },
          {
            id: "4",
            label: "4",
          },
          {
            id: "5",
            label: "5",
          },
        ],
        placeholder: null,
        type: "SELECT",
        validations: [
          {
            errorMessage: "Ce champ est obligatoire",
            type: "required",
          },
        ],
        value: "3",
      },
    ],
  },
  {
    elements: [
      {
        id: "cbd94b0d-556a-4d53-96d8-0937c071dc82",
        label: "Nature du support",
        options: [
          {
            id: "0",
            label: "Brique",
          },
          {
            id: "1",
            label: "Agglo",
          },
          {
            id: "2",
            label: "Siporex",
          },
        ],
        placeholder: null,
        type: "SELECT",
        validations: [],
        value: "",
      },
      {
        id: "19aa9d24-6cf0-4df7-83ef-5245e85f3970",
        label: "Nombre de panneaux",
        placeholder: null,
        type: "TEXT",
        validations: [
          {
            errorMessage: "Ce champ est obligatoire",
            type: "required",
          },
        ],
        value: "",
      },
      {
        id: "6ea08223-000e-4423-91d5-14f7afb1e90b",
        label: "Débit internet correct ?",
        options: [
          {
            id: "0",
            label: "Oui",
          },
          {
            id: "1",
            label: "Non",
          },
        ],
        placeholder: null,
        type: "SELECT",
        validations: [
          {
            errorMessage: "Ce champ est obligatoire",
            type: "required",
          },
        ],
        value: "",
      },
      {
        id: "42907e34-529f-4b49-bf54-ce3e91b3dca0",
        label: "Ajouter prise CPL ?",
        options: [
          {
            id: "0",
            label: "Oui",
          },
          {
            id: "1",
            label: "Non",
          },
        ],
        placeholder: null,
        type: "SELECT",
        value: "",
      },
    ],
    id: "45ad3479-56a5-47f7-be22-b8105a5b2686",
    label: "Installation photovoltaïque",
  },
];
