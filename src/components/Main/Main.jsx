import './Main.scss';

import Button from "../Button/Button";
import Footer from '../Footer/Footer';

export default function Main(props) {
  return (
    <main>
      <h1>Buttons</h1>
      {["default", "outline", "text"].map(variant => (
        <div className="row">

          <div className="col">
            <div className="title">{`<Button variant="${variant}" />`}</div>
            <Button variant={variant}/>
          </div>

          <div className="col">
            <div className="title">{"&:hover, &:focus"}</div>
            <Button variant={variant} focus={`${variant}-focus`} />
          </div>
        </div>
      ))}

      <div className="row">
        <div className="col">
          <div className="title">{"<Button disableShadow />"}</div>
          <Button variant="disableShadow" color="primary" />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="title">{"<Button disabled />"}</div>
          <Button disabled />
        </div>
        <div class="col">
          <div className="title">{'<Button variant="text" disabled />'}</div>
          <Button variant="text" disabled />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="title">{'<Button startIcon="add_shopping_cart" />'}</div>
          <Button variant="primary" startIcon="add_shopping_cart" />
        </div>
        <div className="col">
          <div className="title">{'<Button endIcon="add_shopping_cart" />'}</div>
          <Button variant="primary" endIcon="add_shopping_cart" />
        </div>
      </div>

      <div className="row">
        {["sm", "md", "lg"].map(sz => (
          <div className="col">
            <div className="title">{`<Button size="${sz}" />`}</div>
            <Button variant="primary" size={sz}/>
          </div>
        ))}
      </div>
      
      <div className="row">
        {["default", "primary", "secondary", "danger"].map(color => (
          <div className="col last">

            <div class="col">
              <div className="title">{`<Button color="${color}" />`}</div>
              <Button color={color} />
            </div>

            <div class="col">
              <div className="title">{"&:hover, &:focus"}</div>
              <Button color={color} focus={`${color}-focus`} />
            </div>

          </div>
        ))}
      </div>
      
      <p class="source">Icons: https://material.io/resources/icons/?style=round</p>

      <Footer />
    </main>
  );
}