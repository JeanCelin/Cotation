import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header_description">
        <div className="header_name">
          <h2>Currency Quotation</h2>
        </div>
        <div className="header_text">
          <p>
            Select a pair of currencies and see the current value. You can also
            use the fields to customize the amount and see the corresponding
            values.
          </p>
        </div>
      </div>
    </>
  );
}
