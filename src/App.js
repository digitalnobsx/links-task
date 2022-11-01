
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css"
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';



function App () {
  
  const data = {
    name: 'Itoro Joseph',
    image: 'http://github.com/digitalnobsx.png',
    links: [
      {
        name: "Twitter",
        url: "http://twitter.com/digitalnobsx/",
        icon: "twitter",
      },
      {
        name: "Slack",
        url: "https://slack.com/",
        icon: "slack",
      },
      {
        name: "Zuri Team",
        url: "https://training.zuri.team/",
        icon: "",
      },
      {
        name: "Zuri Books",
        url: "http://books.zuri.team",
        icon: "",
      },
      {
        name: "Python Books",
        url: "https://books.zuri.team/python-for-beginners?ref_id=aity_dev",
        icon: "",
      },
      {
        name: "Background Check for Coders",
        url: "https://background.zuri.team",
        icon: "",
      },
      {
        name: "Design Books",
        url: "https://books.zuri.team/design-rules",
        icon: "",
      },

    ],
  };
  return (
    <div className="m-4">
      <div className="flex flex-column justify-content-center align-items-center">
        <Avatar id="profile__img" image={data.image} size="xlarge" shape="circle" className="p-overlay-badge">
        </Avatar>
        <h1 className="m-2">{data.name}</h1>
      </div>
      <div className="flex justify-content-center align-items-center">
        <div className="flex flex-column">
          <Button id="twitter" className="m-2 p-2 p-button-lg p-button-outlined justify-content-center">{data.links[0].name}</Button>
          <Button id="slack" className="m-2 p-2 p-button-lg p-button-outlined justify-content-center">{data.links[1].name}</Button>
          <Button id="btn__zuri" className="m-2 p-2 p-button-lg p-button-outlined justify-content-center">{data.links[2].name}</Button>
          <Button id="books" className="m-2 p-2 p-button-lg p-button-outlined justify-content-center">{data.links[3].name}</Button>
          <Button id="book__python" className="m-2 p-2 p-button-lg p-button-outlined justify-content-center">{data.links[4].name}</Button>
          <Button id="pitch" className="m-2 p-2 p-button-lg p-button-outlined justify-content-center">{data.links[5].name}</Button>
          <Button id="book__design" className="m-2 p-2 p-button-lg p-button-outlined justify-content-center">{data.links[6].name}</Button>
        </div>
      </div>
    </div>
  );
}
export default App;