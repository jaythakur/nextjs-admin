import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import routes from '@/config/routes';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuizIcon from '@mui/icons-material/Quiz';

// theme constant
export const gridSpacing = 3;
export const drawerWidth = 260;
export const appDrawerWidth = 320;

export const navItems = [
  {
    title: 'Dashboard',
    icon: <DashboardIcon fontSize="small" />,
    path: routes.HOME,
    menuId: '1',
  },
  {
    title: 'Users',
    icon: <GroupIcon fontSize="small" />,
    menu: 'users',
    menuId: '2',
    children: [
      {
        title: 'Manage users',
        icon: <DashboardIcon fontSize="small" />,
        menuId: '2.1',
        path: routes.USERS,
      },
      {
        title: 'Manage roles',
        icon: <DashboardIcon fontSize="small" />,
        path: routes.HOME,
        menuId: '2.1',
        path: routes.ROLES,
      },
    ],
  },
  {
    title: 'Subjects',
    icon: <MenuBookIcon fontSize="small" />,
    menuId: '3',
    menu: 'subjects',
    path: routes.SUBJECTS,
  },
  {
    title: 'Topics',
    icon: <LibraryBooksIcon fontSize="small" />,
    menuId: '4',
    menu: 'topics',
    path: routes.TOPICS,
  },
  // {
  //   title: 'Chapters',
  //   icon: <InfoIcon fontSize="small" />,
  //   menu: '5',
  //   menu: 'chapters',
  //   path: routes.chapters,
  // },
  // {
  //   title: 'Quizzes',
  //   icon: <QuizIcon fontSize="small" />,
  //   menu: '6',
  //   menu: 'quizzes',
  //   path: routes.quizzes,
  // },
  // {
  //   title: 'Questions',
  //   icon: <QuizIcon fontSize="small" />,
  //   menu: '6',
  //   menu: 'questions',
  //   path: routes.questions,
  // },
  // { title: 'Faqs', icon: <HelpIcon fontSize="small" />, path: routes.home },
];

export const subjectFormStages = [
  { primary: 'Profile', secondary: '' },
  { primary: 'Change Password', secondary: '' },
];
