import React from 'react';
import { useStore , CartItem} from '../../store'; // Tu store de Zustand
import { Container, Table, TableRow, TableHeader, TableCell, Summary, SummaryRow, BoldText, RemoveButton } from './styles';
import { FiTrash2 } from 'react-icons/fi';

const CartPage: React.FC = () => {
  const {cart, removeItem} = useStore();
  const shippingCost = 4; // Precio fijo de envío
  const subtotal = cart.items.reduce((acc, item) => acc + item.price, 0); // Total de los artículos
  const total = subtotal + shippingCost; // Total final

  return (
    <Container>
      <h2>Tu Carrito</h2>
      {cart.items.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Artículo</TableHeader>
            <TableHeader>Precio (€)</TableHeader>
            <TableHeader>Acción</TableHeader>
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
                      aria-label={`Eliminar ${item.name}`}
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
          <span>Envío:</span>
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
