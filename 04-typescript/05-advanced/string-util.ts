type Company = 'Apple' | 'IBM' | 'GitHub';

type C1 = Lowercase<Company>;
type C2 = Uppercase<Company>;
type C3 = Capitalize<Company>;
type C4 = Uncapitalize<Company>;