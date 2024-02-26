import MunkaKartya from "./MunkaKartya";

export default function MunkaKartyaContainer(props) {
    return props.lista.map((e, i) => {
      return <MunkaKartya key={i} elem={e}/>;
    });
  }