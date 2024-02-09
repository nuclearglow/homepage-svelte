import type { LinkItem } from '$lib/types';

/** Banner */
// Banner text
export const banner = `
\t _   _      _ _
\t| | | |    | | |
\t| |_| | ___| | | ___
\t|  _  |/ _ \\ | |/ _ \\
\t| | | |  __/ | | (_) |
\t\\_| |_/\\___|_|_|\\___/


> Nice to meet you!

> I'm Sven Vowe
\t* full stack lead web dev
\t* software engineer
\t* IT freelancer

> Reach me here:`;

export const footer = `
> Have a nice day !\n
`;

export const contacts: LinkItem[] = [
  {
    text: '\t* email',
    link: 'mailto:svenvowe@gmail.com',
  },
  {
    text: '\t* github',
    link: 'https://github.com/nuclearglow',
  },
  {
    text: '\t* linkedin',
    link: 'https://www.linkedin.com/in/svenvowe/',
  },
  {
    text: '\t* gulp',
    link: 'https://www.gulp.de/gulp2/home/profil/6hpm75x1o6?5',
  },
  {
    text: '\t* xing',
    link: 'https://xing.to/svenvowe',
  },
];

export const prompt = `~ % `;
