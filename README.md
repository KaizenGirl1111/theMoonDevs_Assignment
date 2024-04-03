### Fragmentation of Functionality / UI

#### Reasons for Fragmentation by UI:

The core of React lies in modularity and reusability of components throughout the application. I did fragmentation of UI for 3 broad reasons - 
1. I split the main page into main components: a. Dashboard b. Transaction Table c. Chain Selector d. App toast
2. I observed some components were reused quite several times(AppIcon/AppExtLink) and needed to be rewritten for implementation.
3. Several components used props(props are used to customise the component items at each time of use) and that's why I felt the need to specifically create components for them (eg. AppChip)

4. I put the specific functionality and custom hooks used by a particular component on the same component page. There were not many custom hooks that were reused throughout the SPA but for specific components only the functions were used (eg. async execute Burn was used for the Dashboard component only ) so I opted out and gave less priority to splitting in hooks.

   Kindly excuse me if I haven't imported some custom hooks/UI components, these are the max I did in 2 hrs.

   Looking forward to work with The Moon Devs and help combating skilled developers with Devin AI!

   <img width="46" alt="image" src="https://github.com/KaizenGirl1111/theMoonDevs_Assignment/assets/73153808/683431cc-42fd-4479-b7ae-e94536cc17a5">
