import { Option } from "src/app/components/dropdown/dropdown.component";

export const FILTERS_HABIT: Option[] = [
  { id: 0, name: 'Kulisty', key: 'spherical', checked: false },
  { id: 1, name: 'Stożkowy', key: 'conical', checked: false },
  { id: 2, name: 'Kolumnowy', key: 'columnar', checked: false },
  { id: 3, name: 'Płożący', key: 'laying', checked: false },
  { id: 4, name: 'Wąskostożkowy', key: 'narrow-conical', checked: false },
  { id: 5, name: 'Szerokostożkowy', key: 'wide-conical', checked: false },
  { id: 6, name: 'Poduszkowaty', key: 'cushiony', checked: false },
  { id: 7, name: 'Krzaczasty', key: 'bushy', checked: false },
  { id: 8, name: 'Płaszczący', key: 'flattering', checked: false },
  { id: 9, name: 'Jajowaty', key: 'ovoid', checked: false }
];

export const MOCKED_FILTERS: Option[] = [
  { id: 0, name: 'Test 1', key: 'test_1', checked: false },
  { id: 1, name: 'Test 2', key: 'test_2', checked: false },
  { id: 2, name: 'Test 3', key: 'test_3', checked: false },
  { id: 3, name: 'Test 4', key: 'test_4', checked: false },
]