import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class MainFrame extends JFrame {
    public MainFrame() {
        setTitle("Sanat Merkezi - Yönetici Paneli");
        setSize(800, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Sidebar
        JPanel sidebar = new JPanel();
        sidebar.setLayout(new BoxLayout(sidebar, BoxLayout.Y_AXIS));
        sidebar.setBackground(new Color(33, 37, 41));
        sidebar.setPreferredSize(new Dimension(200, 600));

        String[] menuItems = {"Dashboard", "Eğitmenler", "Öğrenciler", "Dersler", "Randevular"};
        for (String item : menuItems) {
            JButton btn = new JButton(item);
            btn.setMaximumSize(new Dimension(200, 40));
            btn.setBackground(new Color(33, 37, 41));
            btn.setForeground(Color.WHITE);
            btn.setFocusPainted(false);
            btn.setBorderPainted(false);
            sidebar.add(btn);
        }

        // Main Content
        JPanel mainContent = new JPanel(new BorderLayout());
        mainContent.setBackground(Color.WHITE);

        JPanel header = new JPanel(new FlowLayout(FlowLayout.LEFT));
        header.setBackground(new Color(248, 249, 250));
        header.add(new JLabel("Yönetim Paneline Hoş Geldiniz"));

        String[] columnNames = {"ID", "Öğrenci", "Ders", "Tarih", "Durum"};
        Object[][] data = {
            {"1", "Ali Veli", "Resim", "12.05.2026", "Onaylandı"},
            {"2", "Ayşe Fatma", "Piyano", "13.05.2026", "Beklemede"},
            {"3", "Mehmet Can", "Keman", "14.05.2026", "Onaylandı"}
        };
        JTable table = new JTable(data, columnNames);
        JScrollPane scrollPane = new JScrollPane(table);

        mainContent.add(header, BorderLayout.NORTH);
        mainContent.add(scrollPane, BorderLayout.CENTER);

        setLayout(new BorderLayout());
        add(sidebar, BorderLayout.WEST);
        add(mainContent, BorderLayout.CENTER);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new MainFrame().setVisible(true);
        });
    }
}
