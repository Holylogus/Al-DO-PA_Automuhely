import Csempe from "./Csempe";

export default function Csempek(props) {
  return props.csempelista.map((e, i) => {
    return <Csempe elem={e} />;
  });
}
