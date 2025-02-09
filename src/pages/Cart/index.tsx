import React from 'react';
import { useStore , CartItem} from '../../store'; // Tu store de Zustand
import { Container, Table, TableRow, TableHeader, TableCell, Summary, SummaryRow, BoldText, RemoveButton } from './styles';
import { FiTrash2 } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const CartPage: React.FC = () => {
  const {cart, removeItem} = useStore();
  const shippingCost = 4;
  const subtotal = cart.items.reduce((acc, item) => acc + item.price, 0);
  const total = subtotal + shippingCost;
  const { t } = useTranslation();

  return (
    <Container>
      <h2>{t("titleCart")}</h2>
      {cart.items.length === 0 ? (
        <p>{t("textCartEmpty")}</p>
      ) : (
        <>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Item</TableHeader>
            <TableHeader>Price (zl)</TableHeader>
            <TableHeader>Action</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {cart.items.map((item: CartItem, index: number) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.price.toFixed(2)}</TableCell>
              <TableCell>
                    <RemoveButton
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.name}`}
                    >
                      <FiTrash2 />
                    </RemoveButton>
                  </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <Summary>
        <SummaryRow>
          <span>Subtotal:</span>
          <BoldText>{subtotal.toFixed(2)} €</BoldText>
        </SummaryRow>
        <SummaryRow>
          <span>Shipment:</span>
          <BoldText>{shippingCost.toFixed(2)} €</BoldText>
        </SummaryRow>
        <SummaryRow>
          <span>Total:</span>
          <BoldText>{total.toFixed(2)} €</BoldText>
        </SummaryRow>
      </Summary>
      </>
      )}
    </Container>
  );
};

export default CartPage;
